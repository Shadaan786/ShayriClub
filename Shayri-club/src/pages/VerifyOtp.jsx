import { useState, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

const ResetOtpVerification = () => {

    const Navigate = useNavigate();

    const [digits, setDigits] = useState(["", "", "", "", "", ""]);
    const [text, setText] = useState("");
    const [SearchParams] = useSearchParams();
    const [isDisable, setIsDisable] = useState(false);
    const boxRefs = useRef([]);

    const secretPin = digits.join("");
    const phase_id = SearchParams.get('phase_id')

    const setDigitAt = (index, value) => {
        setDigits((prev) => {
            const next = [...prev];
            next[index] = value;
            return next;
        });
    }

    const handleBoxChange = (index, rawValue) => {
        const value = rawValue.replace(/\D/g, "");
        if (text) setText("");

        if (value.length <= 1) {
            setDigitAt(index, value);
            if (value && index < 5) {
                boxRefs.current[index + 1]?.focus();
            }
            return;
        }

        // Handles a pasted string landing in one box
        const pasted = value.slice(0, 6 - index).split("");
        setDigits((prev) => {
            const next = [...prev];
            pasted.forEach((d, i) => { next[index + i] = d; });
            return next;
        });
        const lastFilled = Math.min(index + pasted.length, 5);
        boxRefs.current[lastFilled]?.focus();
    }

    const handleBoxKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            if (digits[index]) {
                setDigitAt(index, "");
            } else if (index > 0) {
                boxRefs.current[index - 1]?.focus();
                setDigitAt(index - 1, "");
            }
            if (text) setText("");
        } else if (e.key === "ArrowLeft" && index > 0) {
            boxRefs.current[index - 1]?.focus();
        } else if (e.key === "ArrowRight" && index < 5) {
            boxRefs.current[index + 1]?.focus();
        } else if (e.key === "Enter") {
            handleVerify();
        }
    }

    const handleBoxPaste = (index, e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6 - index).split("");
        if (!pasted.length) return;
        setDigits((prev) => {
            const next = [...prev];
            pasted.forEach((d, i) => { next[index + i] = d; });
            return next;
        });
        const lastFilled = Math.min(index + pasted.length, 5);
        boxRefs.current[lastFilled]?.focus();
        if (text) setText("");
    }

    const mainTime = new Date();
    mainTime.setSeconds(mainTime.getSeconds() + 300); // 5 minutes to enter the code

    const time2 = new Date();
    time2.setSeconds(time2.getSeconds() + 60); // 1 minute before resend is allowed

    const email = SearchParams.get("email");

    const handleVerify = () => {

        if (!secretPin) {
            setText("Enter the six-digit code from your email");
            return;
        }

        axiosInstance
            .post(`/api/otpverification?email=${email}&phase_Id=${phase_id}`, {
                otp: secretPin
            })
            .then((Response) => {
                if (Response.data.success) {
                    Navigate(`/reset_password?email=${email}&otp=${secretPin}&phase_id=${phase_id}`);
                } else if(Response.status === 403) {
                    setText("Something went wrong");
                }else{
                    setText("Sorry, that code doesn't match")
                }
            }).catch((error) => {
                console.error("Error while verifying reset otp", error);
                setText("Something went wrong. Please try again.");
            })

    }

    const resendOtp = () => {
        axiosInstance
            .get(`/api/resendOtp?email=${email}`)
            .then((Response) => {
                if (Response.data.success) {
                    setText(Response.data.message);
                    setDigits(["", "", "", "", "", ""]);
                    boxRefs.current[0]?.focus();
                }
            })
    }

    // Ink-ring countdown — a wax-seal circle that empties like drying ink,
    // with a quill nib riding the leading edge.
    const CountdownBadge = ({ label, durationSeconds }) => {
        const C = 100.53; // circumference for r=16
        return (
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A54A]/25 bg-[#2A1B42]/50 px-4 py-2">
                <svg width="22" height="22" viewBox="0 0 36 36" className="shrink-0">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(212,165,74,0.16)" strokeWidth="2" />
                    <circle
                        cx="18" cy="18" r="16" fill="none"
                        stroke="#D4A54A" strokeWidth="2" strokeLinecap="round"
                        strokeDasharray={C}
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "18px 18px",
                            animation: `otp-ring-drain ${durationSeconds}s linear forwards`,
                        }}
                    />
                    <circle cx="18" cy="2.5" r="1.4" fill="#F0C36D" />
                </svg>
                <span className="font-serif italic text-[14px] text-[#E9DFC8] tracking-wide">
                    {label}
                </span>
            </div>
        );
    };

    const OtpTimer = ({ expiryTimestamp }) => {
        const { minutes, seconds } = useTimer({ expiryTimestamp, onExpire: () => setIsDisable(false), interval: 20 });

        return (
            <CountdownBadge
                durationSeconds={60}
                label={`A new line may be sent in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
            />
        );
    }

    const MainTimer = ({ expiryTimestamp }) => {
        const { minutes, seconds } = useTimer({ expiryTimestamp, onExpire: () => Navigate('/ForgotPassword'), interval: 20 });

        return (
            <CountdownBadge
                durationSeconds={300}
                label={`This verse fades in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
            />
        );
    }

    return (
        <>
            <style>{`
                @keyframes otp-ring-drain {
                    from { stroke-dashoffset: 0; }
                    to   { stroke-dashoffset: 100.53; }
                }
                @keyframes otp-fade-in {
                    from { opacity: 0; transform: translateY(-4px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes otp-glow-drift {
                    0%, 100% { transform: translate(-6%, -4%) scale(1); }
                    50%      { transform: translate(4%, 3%) scale(1.06); }
                }
                .otp-fade-in { animation: otp-fade-in 0.2s ease-out; }
                .otp-serif { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }
                .otp-body  { font-family: 'EB Garamond', 'Cormorant Garamond', serif; }
            `}</style>

            <div
                className="otp-body relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-12"
                style={{ background: "radial-gradient(circle at 50% 50%, #3A2360 0%, #241536 30%, #120A1F 60%, #050308 100%)" }}
            >
                {/* ambient ink glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
                    style={{ background: "radial-gradient(circle, #6B3FA0 0%, transparent 70%)", animation: "otp-glow-drift 14s ease-in-out infinite" }}
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #D4A54A 0%, transparent 70%)" }}
                />

                <div
                    className="relative w-full max-w-[560px] rounded-2xl border border-[#D4A54A]/15 px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:px-14 sm:py-12"
                    style={{ background: "linear-gradient(155deg, #08050D 0%, #170F26 32%, #2E1C48 50%, #170F26 68%, #08050D 100%)" }}
                >

                    <img className="w-10 h-10" src="/logo2.svg" alt="" />

                    {/* header */}
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <p className="otp-serif text-[12px] font-medium uppercase tracking-[0.28em] text-[#D4A54A]">
                                Alfaz
                            </p>
                            <h1 className="otp-serif mt-2 text-[28px] font-medium italic leading-snug text-[#F3E9D8]">
                                Enter your code
                            </h1>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#B7A6D3]">
                                {email
                                    ? <>A six-digit line was sent to <span className="text-[#E9DFC8]">{email}</span></>
                                    : "A six-digit line was sent to your email"}
                            </p>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                            <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
                                <path d="M27 2C20 6 12 12 8 22c-2 5-3 9-3 13" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M27 2C22 8 20 14 14 18" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M27 2C24 9 22 15 17 21" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M4 33c2-1 5-1 6 1" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M2 37c4-2 9-1 12 1" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                            </svg>
                        </div>
                    </div>

                    {/* expiry status */}
                    <div className="mt-6">
                        <MainTimer expiryTimestamp={mainTime} />
                    </div>

                    {/* error / status message */}
                    {text && (
                        <div className="otp-fade-in mt-5 rounded-md border-l-2 border-[#C06A57] bg-[#C06A57]/[0.08] px-3.5 py-2.5">
                            <p className="otp-serif text-[14.5px] italic text-[#E3B3A6]">{text}</p>
                        </div>
                    )}

                    {/* code input */}
                    <div className="mt-8">
                        <label className="otp-serif mb-3 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
                            Verification code
                        </label>
                        <div className="flex justify-between gap-2 sm:gap-3" role="group" aria-label="One-time passcode, 6 digits">
                            {digits.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (boxRefs.current[index] = el)}
                                    className={`otp-serif h-14 w-full max-w-[52px] rounded-lg border bg-[#150C24] text-center text-2xl text-[#F3E9D8] outline-none transition focus:ring-[3px] focus:ring-[#D4A54A]/15 ${
                                        digit ? "border-[#D4A54A]/70" : "border-[#D4A54A]/25"
                                    } focus:border-[#D4A54A]/60`}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    aria-label={`Digit ${index + 1}`}
                                    value={digit}
                                    onChange={(e) => handleBoxChange(index, e.target.value)}
                                    onKeyDown={(e) => handleBoxKeyDown(index, e)}
                                    onPaste={(e) => handleBoxPaste(index, e)}
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>

                        <button
                            className="otp-serif mt-6 w-full rounded-lg bg-gradient-to-r from-[#D4A54A] to-[#C68F3A] py-3 text-[15px] font-semibold tracking-wide text-[#1D1230] transition hover:from-[#F0C36D] hover:to-[#D4A54A] active:scale-[0.995] focus:outline-none focus:ring-[3px] focus:ring-[#D4A54A]/25"
                            onClick={handleVerify}
                        >
                            Confirm &amp; continue
                        </button>
                    </div>

                    {/* resend */}
                    <div className="mt-7 flex flex-col gap-3 border-t border-[#D4A54A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[14px] text-[#8E7BAE]">Not in your inbox yet?</p>

                        <div className="flex items-center gap-3">
                            {isDisable && (
                                <div className="otp-fade-in">
                                    <OtpTimer expiryTimestamp={time2} />
                                </div>
                            )}
                            <button
                                className="otp-serif text-[14.5px] italic font-medium text-[#D4A54A] transition hover:text-[#F0C36D] disabled:cursor-not-allowed disabled:text-[#5A4C74] focus:outline-none"
                                disabled={isDisable}
                                onClick={() => { resendOtp(); setIsDisable(true) }}
                            >
                                {isDisable ? "Sent, once more" : "Send again"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ResetOtpVerification
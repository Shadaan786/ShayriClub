import { useState } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

const ForgotPassword = () => {

    const Navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const phase_id = useRef("");

    const handleSendOtp = () => {

        if (!email) {
            setText("Please enter your email address");
            return;
        }

        setIsSending(true);

        axiosInstance
            .post(`/api/emailverification?email=${email}`)
            .then((Response) => {
                if (Response.data.success) {
                    Navigate(`/OtpVerification?email=${email}&phase_id=${Response.data.phase_id}`);
                } else {
                    setText(Response.data.message || "No account found with that email");
                    setIsSending(false);
                }
            })
            .catch((error) => {
                console.error("Error while sending forgot password request", error);
                setText("Something went wrong. Please try again.");
                setIsSending(false);
            });
    }


    return (
        <>
            <style>{`
                @keyframes otp-fade-in {
                    from { opacity: 0; transform: translateY(-4px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes otp-glow-drift {
                    0%, 100% { transform: translate(-6%, -4%) scale(1); }
                    50%      { transform: translate(4%, 3%) scale(1.06); }
                }
                @keyframes otp-nib-write {
                    0%   { stroke-dashoffset: 120; }
                    100% { stroke-dashoffset: 0; }
                }
                .otp-fade-in { animation: otp-fade-in 0.2s ease-out; }
                .otp-serif { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }
                .otp-body  { font-family: 'EB Garamond', 'Cormorant Garamond', serif; }
                .fp-nib path {
                    stroke-dasharray: 120;
                    animation: otp-nib-write 1.4s ease-out forwards;
                }
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
                                Forgotten your password?
                            </h1>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#B7A6D3]">
                                Enter the email tied to your account and we'll send a code to write a new one.
                            </p>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                            {/* quill mid-stroke, tracing a line — signature element for this step */}
                            <svg className="fp-nib" width="34" height="40" viewBox="0 0 34 40" fill="none">
                                <path d="M27 2C20 6 12 12 8 22c-2 5-3 9-3 13" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M27 2C22 8 20 14 14 18" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M27 2C24 9 22 15 17 21" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M4 33c2-1 5-1 6 1" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M2 37c4-2 9-1 12 1" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                            </svg>
                        </div>
                    </div>

                    {/* status / error message */}
                    {text && (
                        <div className="otp-fade-in mt-6 rounded-md border-l-2 border-[#C06A57] bg-[#C06A57]/[0.08] px-3.5 py-2.5">
                            <p className="otp-serif text-[14.5px] italic text-[#E3B3A6]">{text}</p>
                        </div>
                    )}

                    {/* email input */}
                    <div className={text ? "mt-5" : "mt-8"}>
                        <label className="otp-serif mb-2 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
                            Email address
                        </label>
                        <input
                            className="otp-serif w-full rounded-lg border border-[#D4A54A]/25 bg-[#150C24] px-4 py-3.5 text-[16px] tracking-wide text-[#F3E9D8] outline-none transition placeholder:text-[#4B3B63] focus:border-[#D4A54A]/60 focus:ring-[3px] focus:ring-[#D4A54A]/15"
                            type="email"
                            placeholder="you@example.com"
                            aria-label="Email address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (text) setText(""); }}
                            onKeyDown={(e) => { if (e.key === "Enter") handleSendOtp(); }}
                        />

                        <button
                            className="otp-serif mt-4 w-full rounded-lg bg-gradient-to-r from-[#D4A54A] to-[#C68F3A] py-3 text-[15px] font-semibold tracking-wide text-[#1D1230] transition hover:from-[#F0C36D] hover:to-[#D4A54A] active:scale-[0.995] focus:outline-none focus:ring-[3px] focus:ring-[#D4A54A]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                            onClick={handleSendOtp}
                            disabled={isSending}
                        >
                            {isSending ? "Sending the code…" : "Send reset code"}
                        </button>
                    </div>

                    {/* back to login */}
                    <div className="mt-7 flex items-center justify-center border-t border-[#D4A54A]/15 pt-6">
                        <p className="text-[14px] text-[#8E7BAE]">
                            Remembered it after all?{" "}
                            <button
                                className="otp-serif italic font-medium text-[#D4A54A] transition hover:text-[#F0C36D] focus:outline-none"
                                onClick={() => Navigate("/login")}
                            >
                                Return to sign in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ForgotPassword
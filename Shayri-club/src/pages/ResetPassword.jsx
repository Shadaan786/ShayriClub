import { useState, useEffect } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {

    const Navigate = useNavigate();
    const [SearchParams] = useSearchParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [text, setText] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const email = SearchParams.get("email");
    const phaseId = SearchParams.get("phase_id");

    // Reaching this page requires a phase_id proving the OTP step was
    // actually completed — without one, send them back to the start.
    useEffect(() => {
        if (!phaseId || !email) {
            Navigate("/ForgotPassword", { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const rules = [
        { label: "At least 8 characters", test: (p) => p.length >= 8 },
        { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
        { label: "One number", test: (p) => /[0-9]/.test(p) },
    ];
    const passedRules = rules.filter((r) => r.test(password)).length;

    const handleReset = () => {

        if (!phaseId) {
            setText("This reset link has expired. Please start again.");
            return;
        }
        if (!password || !confirmPassword) {
            setText("Please fill in both fields");
            return;
        }
        if (passedRules < rules.length) {
            setText("Your password doesn't yet meet all the requirements below");
            return;
        }
        if (password !== confirmPassword) {
            setText("Those two lines don't quite match");
            return;
        }

        setIsSaving(true);

        axiosInstance
            .post(`/api/newpassword?email=${email}&phase_id=${phaseId}`, {
                email,
                phase_id: phaseId,
                password
            })
            .then((Response) => {
                if (Response.data.success) {
                    Navigate('/login');
                } else if (Response.data.error === "invalid_phase_id" || Response.data.error === "missing_phase_id") {
                    setText("This reset link has expired. Please start the reset again.");
                    setIsSaving(false);
                } else {
                    setText(Response.data.message || "Could not reset your password");
                    setIsSaving(false);
                }
            })
            .catch((error) => {
                console.error("Error while resetting password", error);
                if (error?.response?.status === 400 && error?.response?.data?.error === "invalid_phase_id") {
                    setText("This reset link has expired. Please start the reset again.");
                } else {
                    setText("Something went wrong. Please try again.");
                }
                setIsSaving(false);
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
                @keyframes otp-check-pop {
                    from { opacity: 0; transform: scale(0.6); }
                    to   { opacity: 1; transform: scale(1); }
                }
                .otp-fade-in { animation: otp-fade-in 0.2s ease-out; }
                .otp-serif { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }
                .otp-body  { font-family: 'EB Garamond', 'Cormorant Garamond', serif; }
                .rp-check { animation: otp-check-pop 0.18s ease-out; }
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
                                Write a new password
                            </h1>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#B7A6D3]">
                                {email
                                    ? <>Set a fresh password for <span className="text-[#E9DFC8]">{email}</span></>
                                    : "Set a fresh password for your account"}
                            </p>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                            {/* an open lock, ready for a new key */}
                            <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
                                <rect x="6" y="17" width="22" height="18" rx="3" stroke="#D4A54A" strokeWidth="1.4" />
                                <path d="M10 17V11a7 7 0 0 1 12.5-4.3" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <circle cx="17" cy="25" r="2.4" stroke="#D4A54A" strokeWidth="1.2" />
                                <path d="M17 27.4V30" stroke="#D4A54A" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* error / status message */}
                    {text && (
                        <div className="otp-fade-in mt-6 rounded-md border-l-2 border-[#C06A57] bg-[#C06A57]/[0.08] px-3.5 py-2.5">
                            <p className="otp-serif text-[14.5px] italic text-[#E3B3A6]">{text}</p>
                        </div>
                    )}

                    {/* password fields */}
                    <div className={text ? "mt-5" : "mt-8"}>
                        <label className="otp-serif mb-2 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
                            New password
                        </label>
                        <div className="relative">
                            <input
                                className="otp-serif w-full rounded-lg border border-[#D4A54A]/25 bg-[#150C24] px-4 py-3.5 pr-12 text-[16px] tracking-wide text-[#F3E9D8] outline-none transition placeholder:text-[#4B3B63] focus:border-[#D4A54A]/60 focus:ring-[3px] focus:ring-[#D4A54A]/15"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter a new password"
                                aria-label="New password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); if (text) setText(""); }}
                            />
                            <button
                                type="button"
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] italic text-[#8E7BAE] hover:text-[#D4A54A] focus:outline-none"
                                onClick={() => setShowPassword((s) => !s)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* requirement checklist */}
                        {password && (
                            <ul className="otp-fade-in mt-3 space-y-1.5">
                                {rules.map((rule, i) => {
                                    const passed = rule.test(password);
                                    return (
                                        <li key={i} className="flex items-center gap-2 text-[13px]">
                                            <span
                                                className={`rp-check flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                                                    passed
                                                        ? "border-[#D4A54A] bg-[#D4A54A]/15 text-[#D4A54A]"
                                                        : "border-[#4B3B63] text-transparent"
                                                }`}
                                            >
                                                ✓
                                            </span>
                                            <span className={passed ? "text-[#B7A6D3]" : "text-[#5A4C74]"}>
                                                {rule.label}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <label className="otp-serif mb-2 mt-6 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
                            Confirm password
                        </label>
                        <div className="relative">
                            <input
                                className="otp-serif w-full rounded-lg border border-[#D4A54A]/25 bg-[#150C24] px-4 py-3.5 pr-12 text-[16px] tracking-wide text-[#F3E9D8] outline-none transition placeholder:text-[#4B3B63] focus:border-[#D4A54A]/60 focus:ring-[3px] focus:ring-[#D4A54A]/15"
                                type={showConfirm ? "text" : "password"}
                                placeholder="Type it once more"
                                aria-label="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value); if (text) setText(""); }}
                                onKeyDown={(e) => { if (e.key === "Enter") handleReset(); }}
                            />
                            <button
                                type="button"
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] italic text-[#8E7BAE] hover:text-[#D4A54A] focus:outline-none"
                                onClick={() => setShowConfirm((s) => !s)}
                            >
                                {showConfirm ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button
                            className="otp-serif mt-6 w-full rounded-lg bg-gradient-to-r from-[#D4A54A] to-[#C68F3A] py-3 text-[15px] font-semibold tracking-wide text-[#1D1230] transition hover:from-[#F0C36D] hover:to-[#D4A54A] active:scale-[0.995] focus:outline-none focus:ring-[3px] focus:ring-[#D4A54A]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                            onClick={handleReset}
                            disabled={isSaving}
                        >
                            {isSaving ? "Sealing it in…" : "Reset password"}
                        </button>
                    </div>

                    {/* back to login */}
                    <div className="mt-7 flex items-center justify-center border-t border-[#D4A54A]/15 pt-6">
                        <p className="text-[14px] text-[#8E7BAE]">
                            Changed your mind?{" "}
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

export default ResetPassword
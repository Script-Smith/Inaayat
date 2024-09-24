"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState("phone"); // "phone" or "otp"
  const [phoneError, setPhoneError] = useState("");
  const otpRefs = useRef([]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
      setPhoneError("");
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
      return;
    }
    console.log("Sending OTP to", phoneNumber);
    setStep("otp");
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("Verifying OTP", otp.join(""));
  };

  return (
    <div className="flex items-center justify-center font-pop min-h-screen p-4">
      <Card className="w-full max-w-md shadow-2xl bg-light-100">
        <CardHeader className="space-y-1 items-center">
          <div className="w-20 h-20 mb-4 relative">
            <Image
              src="/Logo.png"
              alt="Logo"
              height={100}
              width={100}
            />
          </div>
          <p className="text-3xl text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f9cdc3] to-[#facefb]">
            Sign up to continue.
          </p>
          <CardDescription className="text-center text-gray-600">
            {step === "phone"
              ? "Enter your phone number to get started"
              : "Enter the OTP sent to your phone"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="small-medium font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={15}
                  />
                  <Input
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="pl-10 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                    maxLength={10}
                  />
                </div>
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
              >
                Send OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="otp"
                  className="text-sm font-medium text-gray-700"
                >
                  One-Time Password
                </Label>
                <div className="flex justify-between">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      ref={(el) => (otpRefs.current[index] = el)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("phone")}
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                >
                  Verify OTP
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="subtle-regular justify-center text-gray-500">
            <span className="flex-center gap-1">
            <p>Already have an account? </p>
            <Link href="/signin" className="text-pink-400">Sign in</Link>
            </span>
        </CardFooter>
      </Card>
    </div>
  );
}

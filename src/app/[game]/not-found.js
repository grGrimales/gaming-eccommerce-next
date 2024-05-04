"use client";
import { BasicLayout } from "@/layouts";
import { Basic } from "next/font/google";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import { Separator } from "../components/Shared/Separator/Separator";

export default function NotFound() {
  return (
    <BasicLayout>
      <Separator height={100} />
      <div className="containerNotFound">
        <h2>404 Game Not Found</h2>
        <p>Could not find requested resource</p>
        <Button as={Link} href="/" primary>
          Go Home
        </Button>
      </div>
    </BasicLayout>
  );
}

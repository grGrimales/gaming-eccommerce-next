"use client";
import { Separator } from "@/app/components/Shared/Separator/Separator";
import { BasicLayout } from "@/layouts";
import Link from "next/link";
import { Button } from "semantic-ui-react";

export default function NotFound() {
  return (
    <BasicLayout>
      <Separator height={100} />
      <div className="containerNotFound">
        <h2>404 Platform Not Found</h2>
        <p>Could not find requested resource</p>
        <Button as={Link} href="/" primary>
          Go Home
        </Button>
      </div>
    </BasicLayout>
  );
}

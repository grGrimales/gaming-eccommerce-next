
'use client';
import { BasicLayout } from "@/layouts";
import Link from "next/link";
import { Separator } from "./components/Shared/Separator/Separator";
import { Button } from "semantic-ui-react";

export default function NotFound() {
  return (
    <BasicLayout>
      <Separator height={100} />

      <div className="containerNotFound">
        <h2>404 Not Found</h2>
        <p>Could not find requested resource</p>
        <Button as={Link} href="/" primary >
            Go Home
        </Button>
      </div>
    </BasicLayout>
  );
}

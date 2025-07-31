"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Submitbutton } from "../SubmitButtons";
import { useFormState } from "react-dom";
// import { State, UpdateUserSettings } from "../../actions";
import { useEffect } from "react";
import { toast } from "sonner";
import { type State, UpdateUserSettings } from "@/app/actions";
import { Submitbutton } from "../SubmitButtons";

interface iAppProps {
  firstName: string;
  lastName: string;
  email: string;
}
export function SettingsForm({ email, firstName, lastName }: iAppProps) {
  const initalState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(UpdateUserSettings, initalState);

  useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle className="font-bold">Settings</CardTitle>
        <CardDescription className="mt-3">
          Here you will find settings regarding your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2 ">
          <Label className="mt-3">First Name</Label>
          <Input name="firstName" type="text" defaultValue={firstName} />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Last Name</Label>
          <Input name="lastName" type="text" defaultValue={lastName} />
        </div>

        <div className="flex flex-col gap-y-2 ">
          <Label>Email</Label>
          <Input name="email" type="email" defaultValue={email} disabled />
        </div>
      </CardContent>
      <CardFooter className="mt-4">
        <Submitbutton title="Update your settings" />
      </CardFooter>
    </form>
  );
}

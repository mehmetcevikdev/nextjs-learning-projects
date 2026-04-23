"use client";
import ReCAPTCHA from "react-google-recaptcha";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { toast } from "sonner";

// 1. ŞEMA: Tamamen eğitmenin şu anki yapısına (name, email, message) ve hata mesajlarına uyarlandı.
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  recaptcha: z.string().min(1, "Please verify that you are not a robot."),
});

const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Hata: ${response.status}`);
      }

      form.reset();

      /* toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      }); */
    } catch (error) {
      console.log(error);
      /* toast("An error occurred, please try again."); */
    }

  }

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>
            Help us improve by sending your message.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form id="form-contact-demo" onSubmit={form.handleSubmit(onSubmit)}>
              {/* İSİM ALANI */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="form-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="shadcn"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* E-POSTA ALANI */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="form-email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="shadcn"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* MESAJ ALANI (Karakter sayacı message ile eşleşti) */}
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-message">Message</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="form-message"
                        placeholder="shadcn"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </form>
          </FieldGroup>
          <FieldGroup className="mt-2 rounded-4xl">
            <ReCAPTCHA
              sitekey="6LcZXLwsAAAAANiehvTn6Kje2NQ2mnVfjoFhnuf2"
              onChange={(token) => {
                setRecaptchaToken(token);
                form.setValue("recaptcha", token || "");
              }}
              onExpired={() => {
                setRecaptchaToken(null);
                form.setValue("recaptcha", "");
              }}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="form-contact-demo">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;

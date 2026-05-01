"use client";
import { Hotel } from "@/lib/generated/prisma"; // veya prisma import yolun neyse
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const filterSchema = z.object({
  rating: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
});

type FilterValues = z.infer<typeof filterSchema>;

const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      rating: "",
      priceMin: "",
      priceMax: "",
    },
  });

  const fetchHotels = (filters: FilterValues = {}) => {
    setLoading(true);
    setError(false);
    let url = "/api/hotels";
    const params = new URLSearchParams();

    if (filters.rating) params.append("rating", filters.rating);
    if (filters.priceMin) params.append("priceMin", filters.priceMin);
    if (filters.priceMax) params.append("priceMax", filters.priceMax);

    if (params.toString()) {
      url += "?" + params.toString();
    }
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // fetch datalardan otel cagirma islemi
  /* useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []); */

  function onSubmit(values: FilterValues) {
    fetchHotels(values);
    console.log(values); // şimdilik sadece konsola yaz
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <FieldSet className="contents">
          <FieldGroup className="contents">
            {/* RATING */}
            <Field>
              <FieldLabel>Rating</FieldLabel>
              <Input
                type="number"
                step="0.1"
                placeholder="e.g. 4.5"
                {...form.register("rating")}
              />
              {form.formState.errors.rating && (
                <FieldDescription>
                  {form.formState.errors.rating.message}
                </FieldDescription>
              )}
            </Field>

            {/* PRICE MIN */}
            <Field>
              <FieldLabel>Price Min</FieldLabel>
              <Input
                type="number"
                placeholder="Minimum price"
                {...form.register("priceMin")}
              />
              {form.formState.errors.priceMin && (
                <FieldDescription>
                  {form.formState.errors.priceMin.message}
                </FieldDescription>
              )}
            </Field>

            {/* PRICE MAX */}
            <Field>
              <FieldLabel>Price Max</FieldLabel>
              <Input
                type="number"
                placeholder="Maximum price"
                {...form.register("priceMax")}
              />
              {form.formState.errors.priceMax && (
                <FieldDescription>
                  {form.formState.errors.priceMax.message}
                </FieldDescription>
              )}
            </Field>
          </FieldGroup>
        </FieldSet>

        <Button type="submit">Filtrele</Button>
      </form>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-lg" />
          ))}
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 font-semibold">
          Something went wrong
        </div>
      )}

      {!loading && !error && hotels.length === 0 && (
        <div className="text-center text-blue-500 font-semibold">
          No Hotels Found.
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="shadow-md">
              <CardHeader>
                <Image
                  src={hotel.photos[0]}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded"
                  width={1000}
                  height={1000}
                />
                <CardTitle>{hotel.rating}*</CardTitle>
                <CardTitle className="text-lg font-semibold mt-2">
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{hotel.description}</p>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-lg font-bold">
                  ${hotel.pricePerNight} / Night
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;

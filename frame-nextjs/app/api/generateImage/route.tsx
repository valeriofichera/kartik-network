import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  
  let questionString = req.nextUrl.searchParams.get('questionString');

  if(!questionString) throw new Error("No question string found")

  let decoded_questionString = decodeURIComponent(questionString)

  console.log(decoded_questionString, "decoded_questionString")
  

  const color = "#8a63d2"

  return new ImageResponse(
    (
      <Card>
        <h1
          style={{
            color,
            fontSize: 15,
          }}
        >
          {decoded_questionString}
        </h1>
        <div style={{ display: "flex", marginTop: "12" }}>
          {decoded_questionString}
        </div>
      </Card>
    ),
    {
      width: 800,
      height: 420,
    },
  );
}
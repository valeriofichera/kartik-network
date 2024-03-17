import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  
  // @ts-ignore
  let question_string = req.nextUrl.searchParams?.questionString







  console.log(question_string, "question_string api")

  console.log(JSON.stringify(question_string), "questionString generate image api")
  

  const color = "#8a63d2"

  return new ImageResponse(
    (
      <Card>
        <h1
          style={{
            color,
            fontSize: 40,
          }}
        >
          {question_string}
        </h1>
        <div style={{ display: "flex", marginTop: "12" }}>
        </div>
      </Card>
    ),
    {
      width: 1600,
      height: 600,
    },
  );
}
import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  
  let currentQuestion = req.nextUrl.searchParams.get('currentQuestion');

  console.log(currentQuestion, "currentQuestion")
  

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
          {currentQuestion}
        </h1>
        <div style={{ display: "flex", marginTop: "12" }}>
          {currentQuestion}
        </div>
      </Card>
    ),
    {
      width: 800,
      height: 420,
    },
  );
}
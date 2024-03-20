import type { NextRequest } from "next/server";
import Chance from "chance";

const chance = new Chance();

const animals = Array.from({ length: 250 }, (_, id) => ({
  id,
  type: chance.animal(),
  age: chance.age(),
  name: chance.name(),
}));

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");

  if (query) {
    return Response.json({
      animals: animals.filter((animal) =>
        animal.type.toLowerCase().includes(query),
      ),
    });
  }

  return Response.json({ animals });
}

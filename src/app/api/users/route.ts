import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => NextResponse.json(await prisma.user.findMany())

export const POST = async (req: NextRequest) => {
  const data = await req.json()
  const user = await prisma.user.create({ data })

  return NextResponse.json(user)
}

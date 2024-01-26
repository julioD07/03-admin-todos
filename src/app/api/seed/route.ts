
import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany()

    // const todo = await prisma.todo.create({
    //     data: {
    //         description: 'Gema del alma', completed: true
    //     }
    // })

    const todos = await prisma.todo.createMany({
        data: [
            { description: 'Gema del alma', completed: true },
            { description: 'Gema del tiempo'},
            { description: 'Gema de la mente'},
            { description: 'Gema del poder'},
            { description: 'Gema del espacio'},
            { description: 'Gema de la realidad'},
        ]
    })

    console.log(todos)

  return NextResponse.json({ message: 'Seed Executed' })
} 
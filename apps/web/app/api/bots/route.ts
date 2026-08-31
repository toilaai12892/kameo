import {NextRequest,NextResponse} from 'next/server'; import {prisma} from '@/lib/prisma';
async function demoUser(){return prisma.user.upsert({where:{discordId:'demo'},update:{},create:{discordId:'demo',username:'demo'}})}
export async function GET(){try{const u=await demoUser();return NextResponse.json(await prisma.bot.findMany({where:{userId:u.id},orderBy:{createdAt:'desc'}}))}catch{return NextResponse.json([])}}
export async function POST(req:NextRequest){try{const u=await demoUser();const j=await req.json();const bot=await prisma.bot.create({data:{name:String(j.name||'my-bot').slice(0,48),userId:u.id}});return NextResponse.json(bot)}catch(e){return NextResponse.json({error:'Database not configured'},{status:500})}}

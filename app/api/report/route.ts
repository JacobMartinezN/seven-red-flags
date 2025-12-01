import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  AgeRange,
  Gender,
  RelationshipType,
  ExperienceType,
} from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      initials,
      ageRange,
      city,
      district,
      gender,
      relationshipType,
      experienceType,
      summary,
    } = body;

    // Validar campos obligatorios
    if (
      !initials ||
      !city ||
      !district ||
      !relationshipType ||
      !experienceType ||
      !summary
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Normalizar strings
    const normalizedInitials = String(initials).trim().toUpperCase();
    const normalizedCity = String(city).trim();
    const normalizedDistrict = String(district).trim();

    // Convertir enums estrictamente a los tipos de Prisma
    const safeAgeRange = (ageRange || "VALUE_25_30") as AgeRange;
    const safeGender = (gender || "UNKNOWN") as Gender;
    const safeRelationshipType = relationshipType as RelationshipType;
    const safeExperienceType = experienceType as ExperienceType;

    // Buscar si ya existe un Profile
    let profile = await prisma.profile.findFirst({
      where: {
        initials: normalizedInitials,
        city: normalizedCity,
        district: normalizedDistrict,
        ageRange: safeAgeRange,
        gender: safeGender,
      },
    });

    // Si no existe, lo creamos
    if (!profile) {
      profile = await prisma.profile.create({
        data: {
          initials: normalizedInitials,
          ageRange: safeAgeRange,
          city: normalizedCity,
          district: normalizedDistrict,
          gender: safeGender,
          occupation: "",
          metThrough: "OTRO",
          createdBy: "demo-user",
        },
      });
    }

    // Crear el Report asociado
    await prisma.report.create({
      data: {
        profileId: profile.id,
        authorId: "demo-user",
        relationshipType: safeRelationshipType,
        experienceType: safeExperienceType,
        summary: String(summary).trim(),
      },
    });

    return NextResponse.json(
      { ok: true, profileId: profile.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error en POST /api/report", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

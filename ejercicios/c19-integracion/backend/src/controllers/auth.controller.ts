/// <reference path="../@types/express/index.d.ts" />
import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { prisma } from "../config/prisma";

export async function registrar(req: Request, res: Response) {
  // Prisma tira P2002 si el email ya existe (gracias a @unique). El error handler global lo ataja.
  const usuario = await authService.registrar(req.body);
  return res.status(201).json(usuario);
}

export async function login(req: Request, res: Response) {
  const resultado = await authService.login(req.body);
  if (!resultado) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }
  return res.json(resultado);
}

export async function yo(req: Request, res: Response) {
  // req.usuario es cargado por el middleware authenticate
  const usuario = await prisma.usuario.findUnique({
    where: { id: req.usuario!.id },
  });
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  return res.json(usuario);
}


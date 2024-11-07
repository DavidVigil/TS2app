import { SHA256 } from "crypto-js";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createCliente = async (req: Request, res: Response) => {
  const { nombreCompleto, correo, fechaNacimiento, rfc, password } = req.body;

  await prisma.cliente
    .create({
      data: {
        nombreCompleto: nombreCompleto,
        correo: correo,
        fechaNacimiento: new Date(fechaNacimiento),
        rfc: rfc,
        password: SHA256(password).toString(),
      },
    })
    .then((cliente) => {
      res.status(201).json({
        message: "Cliente creado",
        data: cliente,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

export const getClientes = async (req: Request, res: Response) => {
  await prisma.cliente
    .findMany()
    .then((clientes) => {
      res.status(200).json({
        message: "Lista de clientes",
        data: clientes,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

export const getClienteById = async (req: Request, res: Response) => {
  const { idCliente } = req.params;
  await prisma.cliente
    .findUnique({
      where: {
        idCliente: Number(idCliente),
      },
    })
    .then((cliente) => {
      res.status(200).json({
        message: `Cliente con id: ${idCliente}`,
        data: cliente,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

export const getClienteByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  await prisma.cliente
    .findUnique({
      where: {
        correo: email,
      },
    })
    .then((cliente) => {
      res.status(200).json({
        message: `Cliente con email: ${email}`,
        data: cliente,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

export const deleteCliente = async (req: Request, res: Response) => {
  const { idCliente } = req.params;
  await prisma.cliente
    .delete({
      where: {
        idCliente: Number(idCliente),
      },
    })
    .then((cliente) => {
      res.status(200).json({
        message: `Cliente borrado con id ${idCliente}`,
        data: cliente,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

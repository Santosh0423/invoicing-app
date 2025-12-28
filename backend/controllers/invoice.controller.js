import Invoice from "../models/Invoice.js";

export const createInvoice = async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.json(invoice);
};

export const getInvoices = async (req, res) => {
  res.json(await Invoice.find());
};

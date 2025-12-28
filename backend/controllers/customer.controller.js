import Customer from "../models/Customer.js";

export const createCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
};

export const getCustomers = async (req, res) => {
  res.json(await Customer.find());
};

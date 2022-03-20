module.exports = (user, addresses, contacts = []) => {
  return {
    id: user.id,
    createdAt: user.createdAt,
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    addresses: addresses.map((address) => ({
      addressId: address.id,
      address: `${address.street} ${address.number}`,
      country: address.country,
      // countryCode: address.id, // não tem
      city: address.city,
      state: address.state,
      zipcode: address.zipcode,
    })),
    contacts: contacts.map((address) => ({})),
  };
};

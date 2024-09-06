const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/(x.*)/gi, "").replace(/[^\d]/g, "");

  if (cleaned.length === 10) {
    return `+1 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  } else if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(
      4,
      7
    )}-${cleaned.slice(7)}`;
  }

  return phone;
};

export default formatPhone;

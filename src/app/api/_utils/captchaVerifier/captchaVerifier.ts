const captchaVerifier = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to verify reCAPTCHA');
    }

    const data = (await response.json()) as any;

    if (data.score > 0.5) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default captchaVerifier;

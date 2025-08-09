exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, email, project } = data;
  if (!name || !email || !project) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing fields' }) };
  }

  const destEmail = process.env.PERSONAL_EMAIL || 'wise11jeff@gmail.com';

  const message = {
    personalizations: [
      {
        to: [{ email: destEmail }],
      },
    ],
    from: { email: destEmail },
    subject: 'New Registration',
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\nProject: ${project}`,
      },
    ],
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Email send failed:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};

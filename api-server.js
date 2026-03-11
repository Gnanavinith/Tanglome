// This file would typically be part of a backend service
// For demonstration purposes, here's how the API endpoint would work

const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Webhook endpoint that receives AI CTA requests from frontend
app.post('/api/ai-cta', async (req, res) => {
  try {
    const { message, email, phone } = req.body;
    
    // Forward to n8n webhook
    const n8nResponse = await axios.post('http://localhost:5678/webhook/ai-cta-webhook', {
      message,
      email,
      phone
    });
    
    res.json({
      success: true,
      response: n8nResponse.data
    });
  } catch (error) {
    console.error('Error processing AI CTA request:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process request'
    });
  }
});

// Direct WhatsApp integration endpoint
app.post('/api/whatsapp', async (req, res) => {
  try {
    const { message, phone = '9585458794' } = req.body;
    
    // In a real implementation, this would integrate with WhatsApp Business API
    // For now, we'll return the WhatsApp link
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    res.json({
      success: true,
      whatsappUrl,
      message: 'WhatsApp link generated successfully'
    });
  } catch (error) {
    console.error('Error generating WhatsApp link:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate WhatsApp link'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`AI CTA API server running on port ${PORT}`);
});
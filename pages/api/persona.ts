import { NextApiRequest, NextApiResponse } from 'next';

interface PersonaData {
  founderType: string;
  stage: string;
  industry: string;
  location: string;
  deliveryMedium: string;
  technologySkill?: string;
  marketingSkill?: string;
  salesSkill?: string;
  productSkill?: string;
  designSkill?: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface HubSpotContact {
  properties: {
    firstname: string;
    lastname: string;
    email: string;
    founder_type: string;
    stage: string;
    industry: string;
    location: string;
    delivery_medium: string;
    technology_skill?: string;
    marketing_skill?: string;
    sales_skill?: string;
    product_skill?: string;
    design_skill?: string;
    persona_id: string;
    persona_name: string;
    persona_description: string;
  };
}

// Persona mapping based on the 16 personas we defined
const PERSONA_MAPPING = {
  'diy-founder-idea-stage-education-hsr-only': {
    id: 'diy-founder-idea-stage-education-hsr-only',
    name: 'DIY Founder - Idea Stage - Education - HSR Only',
    description: 'DIY founder in idea stage focusing on education industry, located in HSR Layout'
  },
  'diy-founder-idea-stage-education-whitefield-only': {
    id: 'diy-founder-idea-stage-education-whitefield-only',
    name: 'DIY Founder - Idea Stage - Education - Whitefield Only',
    description: 'DIY founder in idea stage focusing on education industry, located in Whitefield'
  },
  'diy-founder-idea-stage-saas-b2b-hsr-only': {
    id: 'diy-founder-idea-stage-saas-b2b-hsr-only',
    name: 'DIY Founder - Idea Stage - SaaS B2B - HSR Only',
    description: 'DIY founder in idea stage focusing on SaaS B2B, located in HSR Layout'
  },
  'diy-founder-idea-stage-saas-b2b-whitefield-only': {
    id: 'diy-founder-idea-stage-saas-b2b-whitefield-only',
    name: 'DIY Founder - Idea Stage - SaaS B2B - Whitefield Only',
    description: 'DIY founder in idea stage focusing on SaaS B2B, located in Whitefield'
  },
  'diy-founder-mvp-stage-education-hsr-only': {
    id: 'diy-founder-mvp-stage-education-hsr-only',
    name: 'DIY Founder - MVP Stage - Education - HSR Only',
    description: 'DIY founder in MVP stage focusing on education industry, located in HSR Layout'
  },
  'diy-founder-mvp-stage-education-whitefield-only': {
    id: 'diy-founder-mvp-stage-education-whitefield-only',
    name: 'DIY Founder - MVP Stage - Education - Whitefield Only',
    description: 'DIY founder in MVP stage focusing on education industry, located in Whitefield'
  },
  'diy-founder-mvp-stage-saas-b2b-hsr-only': {
    id: 'diy-founder-mvp-stage-saas-b2b-hsr-only',
    name: 'DIY Founder - MVP Stage - SaaS B2B - HSR Only',
    description: 'DIY founder in MVP stage focusing on SaaS B2B, located in HSR Layout'
  },
  'diy-founder-mvp-stage-saas-b2b-whitefield-only': {
    id: 'diy-founder-mvp-stage-saas-b2b-whitefield-only',
    name: 'DIY Founder - MVP Stage - SaaS B2B - Whitefield Only',
    description: 'DIY founder in MVP stage focusing on SaaS B2B, located in Whitefield'
  },
  'fractional-support-idea-stage-education-hsr-only': {
    id: 'fractional-support-idea-stage-education-hsr-only',
    name: 'Fractional Support - Idea Stage - Education - HSR Only',
    description: 'Fractional support founder in idea stage focusing on education industry, located in HSR Layout'
  },
  'fractional-support-idea-stage-education-whitefield-only': {
    id: 'fractional-support-idea-stage-education-whitefield-only',
    name: 'Fractional Support - Idea Stage - Education - Whitefield Only',
    description: 'Fractional support founder in idea stage focusing on education industry, located in Whitefield'
  },
  'fractional-support-idea-stage-saas-b2b-hsr-only': {
    id: 'fractional-support-idea-stage-saas-b2b-hsr-only',
    name: 'Fractional Support - Idea Stage - SaaS B2B - HSR Only',
    description: 'Fractional support founder in idea stage focusing on SaaS B2B, located in HSR Layout'
  },
  'fractional-support-idea-stage-saas-b2b-whitefield-only': {
    id: 'fractional-support-idea-stage-saas-b2b-whitefield-only',
    name: 'Fractional Support - Idea Stage - SaaS B2B - Whitefield Only',
    description: 'Fractional support founder in idea stage focusing on SaaS B2B, located in Whitefield'
  },
  'fractional-support-mvp-stage-education-hsr-only': {
    id: 'fractional-support-mvp-stage-education-hsr-only',
    name: 'Fractional Support - MVP Stage - Education - HSR Only',
    description: 'Fractional support founder in MVP stage focusing on education industry, located in HSR Layout'
  },
  'fractional-support-mvp-stage-education-whitefield-only': {
    id: 'fractional-support-mvp-stage-education-whitefield-only',
    name: 'Fractional Support - MVP Stage - Education - Whitefield Only',
    description: 'Fractional support founder in MVP stage focusing on education industry, located in Whitefield'
  },
  'fractional-support-mvp-stage-saas-b2b-hsr-only': {
    id: 'fractional-support-mvp-stage-saas-b2b-hsr-only',
    name: 'Fractional Support - MVP Stage - SaaS B2B - HSR Only',
    description: 'Fractional support founder in MVP stage focusing on SaaS B2B, located in HSR Layout'
  },
  'fractional-support-mvp-stage-saas-b2b-whitefield-only': {
    id: 'fractional-support-mvp-stage-saas-b2b-whitefield-only',
    name: 'Fractional Support - MVP Stage - SaaS B2B - Whitefield Only',
    description: 'Fractional support founder in MVP stage focusing on SaaS B2B, located in Whitefield'
  }
};

function generatePersonaId(data: PersonaData): string {
  return `${data.founderType}-${data.stage}-${data.industry}-${data.location}-only`;
}

function getPersonaInfo(personaId: string) {
  return PERSONA_MAPPING[personaId as keyof typeof PERSONA_MAPPING] || {
    id: personaId,
    name: `Custom Persona - ${personaId}`,
    description: `Custom persona for ${personaId}`
  };
}

async function createOrUpdateHubSpotContact(data: PersonaData, personaInfo: any) {
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
  
  if (!HUBSPOT_API_KEY) {
    throw new Error('HubSpot API key not configured');
  }

  const contactData: HubSpotContact = {
    properties: {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      founder_type: data.founderType,
      stage: data.stage,
      industry: data.industry,
      location: data.location,
      delivery_medium: data.deliveryMedium,
      technology_skill: data.technologySkill || '',
      marketing_skill: data.marketingSkill || '',
      sales_skill: data.salesSkill || '',
      product_skill: data.productSkill || '',
      design_skill: data.designSkill || '',
      persona_id: personaInfo.id,
      persona_name: personaInfo.name,
      persona_description: personaInfo.description
    }
  };

  try {
    // First, try to find existing contact by email
    const searchResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email
                }
              ]
            }
          ],
          properties: ['email', 'firstname', 'lastname']
        })
      }
    );

    if (!searchResponse.ok) {
      throw new Error(`HubSpot search failed: ${searchResponse.statusText}`);
    }

    const searchResult = await searchResponse.json();
    
    if (searchResult.results && searchResult.results.length > 0) {
      // Contact exists, update it
      const contactId = searchResult.results[0].id;
      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData)
        }
      );

      if (!updateResponse.ok) {
        throw new Error(`HubSpot update failed: ${updateResponse.statusText}`);
      }

      return { action: 'updated', contactId, ...contactData };
    } else {
      // Contact doesn't exist, create new one
      const createResponse = await fetch(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData)
        }
      );

      if (!createResponse.ok) {
        throw new Error(`HubSpot create failed: ${createResponse.statusText}`);
      }

      const createResult = await createResponse.json();
      return { action: 'created', contactId: createResult.id, ...contactData };
    }
  } catch (error) {
    console.error('HubSpot API error:', error);
    throw error;
  }
}

async function addContactToList(contactId: string, personaId: string) {
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
  
  if (!HUBSPOT_API_KEY) {
    throw new Error('HubSpot API key not configured');
  }

  try {
    // Add contact to persona-specific list
    const listResponse = await fetch(
      'https://api.hubapi.com/contacts/v1/lists',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `Persona: ${personaId}`,
          dynamic: false,
          portalId: 243281589
        })
      }
    );

    if (!listResponse.ok) {
      // List might already exist, try to find it
      const listsResponse = await fetch(
        'https://api.hubapi.com/contacts/v1/lists',
        {
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          }
        }
      );

      if (listsResponse.ok) {
        const lists = await listsResponse.json();
        const existingList = lists.lists?.find((list: any) => list.name === `Persona: ${personaId}`);
        
        if (existingList) {
          // Add contact to existing list
          await fetch(
            `https://api.hubapi.com/contacts/v1/lists/${existingList.listId}/add`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                vids: [contactId]
              })
            }
          );
        }
      }
    } else {
      const listResult = await listResponse.json();
      // Add contact to newly created list
      await fetch(
        `https://api.hubapi.com/contacts/v1/lists/${listResult.listId}/add`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            vids: [contactId]
          })
        }
      );
    }
  } catch (error) {
    console.error('Error adding contact to list:', error);
    // Don't throw error for list operations as they're not critical
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: PersonaData = req.body;

    // Validate required fields
    const requiredFields = ['founderType', 'stage', 'industry', 'location', 'deliveryMedium', 'firstName', 'lastName', 'email'];
    for (const field of requiredFields) {
      if (!data[field as keyof PersonaData]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // Generate persona ID
    const personaId = generatePersonaId(data);
    
    // Get persona information
    const personaInfo = getPersonaInfo(personaId);

    // Create or update HubSpot contact
    const contactResult = await createOrUpdateHubSpotContact(data, personaInfo);

    // Add contact to persona-specific list
    await addContactToList(contactResult.contactId, personaId);

    // Return success response
    res.status(200).json({
      success: true,
      action: contactResult.action,
      contactId: contactResult.contactId,
      persona: personaInfo,
      message: `Contact ${contactResult.action} successfully with persona: ${personaInfo.name}`
    });

  } catch (error) {
    console.error('Persona API error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 
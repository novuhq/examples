import { z } from 'zod';

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date);

const emailShoesElementTypeSchema = z.object({image: z.string().default(''), text: z.string().default('')});

const componentTypeSchema = z.discriminatedUnion('componentType', [
  z.object({ componentType: z.literal('shoes'), componentShoeItems: z.array(emailShoesElementTypeSchema)}),
  z.object({ componentType: z.literal('gadgets'), componentText: z.string().default('')}),
  z.object({ componentType: z.literal('moisturizers'), componentText: z.string().default('')}),
  z.object({ componentType: z.literal('all')})
]);

export const zodControlSchema = z.object({
    components: z.array(componentTypeSchema).default([{
      componentType: 'shoes',
      componentShoeItems: [
        {
          image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Shoe 1"
        },
        {
          image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Shoe 2"
        },
        {
          image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Shoe 3"
        }
      ]
    }]),
    topText: z.string().default("We wanted to let you know that we have shipped your items."),
    emailSubject: z.string().default("Shipping order confirmation")
});

export const zodPayloadSchema = z.object({
    orderArrivalLocation: z.string().default('Prague, Czech'),
    orderArrivalDate: z.string().default(formattedDate),
    orderID: z.string().default('112-6949858-2887402'),
    userFirstName: z.string().default('John'),
    orderTotalAmount: z.number().int().default(259),
    orderCurrency: z.enum([
      "$",
      "£",
      "€"
    ]).default("$"),
    packageTrackingLink: z.string().default('https://packagetracking.com/track')
});


export const jsonControlSchema = {
    type: "object",
    properties: {
      components: {
        title: "Add Custom Fields:",
        type: "array",
        default: [{
          "componentType": "shoes",
          "componentShoeItems": [
            {
              image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Shoe 1"
            },
            {
              image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Shoe 2"
            },
            {
              image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Shoe 3"
            }
          ],
        }],
        items: {
          type: "object",
          properties: {
            componentType: {
              title: "Recommendations",
              type: "string",
              enum: [
                "shoes",
                "moisturizers",
                "gadgets",
                "all"
              ],
              default: "shoes",
            },
            componentText: {
              type: "string",
              default: "",
            },
          },
        },
      },
      topText: {
        title: "Pre-shipping Confirmation Text",
        type: "string",
        default: "We wanted to let you know that we have shipped your items."
      },
      emailSubject: {
        title: "Email Subject",
        type: "string",
        default: "Shipping order confirmation"
      },
    },
  };
  
export const jsonPayloadSchema = {
    type: "object",
    properties: {
      orderArrivalLocation: {
        title: "Order Arrival Location",
        type: "string",
        default: "Prague, Czech"
      },
      orderArrivalDate: {
        title: "Order Arrival Date",
        type: "string",
        default: formattedDate,
      },
      orderID: {
        title: "ORDER ID",
        type: "string",
        default: "112-6949858-2887402"
      },
      userFirstName: {
          title: "Order Receiver First Name",
          type: "string",
          default: "John"
      },
      orderTotalAmount: {
        title: "Order Total Amount",
        type: "integer",
        default: 259
      },
      orderCurrency: {
        title: "Currency",
        enum: [
          "$",
          "£",
          "€"
        ],
        default: "$"
      },
      packageTrackingLink: {
        title: "Tracking Link",
        type: "string",
        default: "https://packagetracking.com/track"
      }
    }
  };

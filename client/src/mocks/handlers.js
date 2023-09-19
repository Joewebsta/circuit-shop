import { rest } from "msw";

const returnedProducts = [
  {
    _id: "1",
    title: "Meta Quest 2",
    price: 299.99,
    quantity: 6,
    imageUrl:
      "https://drive.google.com/uc?id=11gsyIIf5D-q92SIbRlkxcvn_DWo7p6vq",
    createdAt: "2023-09-04T16:45:30.137Z",
    updatedAt: "2023-09-15T19:36:45.832Z",
    __v: 0,
  },
  {
    _id: "2",
    title: "DJI Air 2S",
    price: 1299.99,
    quantity: 2,
    imageUrl:
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
    createdAt: "2023-09-04T16:45:08.238Z",
    updatedAt: "2023-09-15T19:36:44.660Z",
    __v: 0,
  },
];

const returnedCartItems = [
  {
    _id: "11",
    title: "Meta Quest 2",
    price: 299.99,
    quantity: 2,
    productId: "1",
    createdAt: "2023-09-16T01:59:12.897Z",
    updatedAt: "2023-09-16T01:59:12.897Z",
    __v: 0,
  },
];

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(returnedProducts));
  }),
  rest.post("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        _id: "3",
        title: "iPhone 14",
        price: 829.99,
        quantity: 10,
        imageUrl:
          "https://drive.google.com/uc?id=1Dq6vz8_pC56LMvnd7D7JP7IgwAHivC1o",
        createdAt: "2023-09-16T02:27:45.027Z",
        updatedAt: "2023-09-16T02:27:45.027Z",
        __v: 0,
      })
    );
  }),
  rest.put("/api/products/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "2",
        title: "DJI Air 3S",
        price: 1300.0,
        quantity: 1000,
        imageUrl:
          "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
        createdAt: "2023-09-04T16:45:08.238Z",
        updatedAt: "2023-09-16T16:23:49.651Z",
        __v: 0,
      })
    );
  }),
  rest.delete("/api/products/:id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
  rest.get("/api/cart", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(returnedCartItems));
  }),
  rest.post("/api/add-to-cart", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        product: {
          _id: "100",
          title: "Meta Quest 2",
          price: 299.99,
          quantity: 5,
          imageUrl:
            "https://drive.google.com/uc?id=11gsyIIf5D-q92SIbRlkxcvn_DWo7p6vq",
          createdAt: "2023-09-04T16:45:30.137Z",
          updatedAt: "2023-09-18T22:42:59.671Z",
          __v: 0,
        },
        item: {
          _id: "11",
          title: "Meta Quest 2",
          price: 299.99,
          quantity: 3,
          productId: "111",
          createdAt: "2023-09-18T22:38:35.512Z",
          updatedAt: "2023-09-18T22:42:59.750Z",
          __v: 0,
        },
      })
    );
  }),
];

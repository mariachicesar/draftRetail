# Using Class and Functional Components


## Clone Project
Open Terminal or Command Line

git clone https://github.com/mariachicesar/draftRetail.git


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

!!!The application is also deployed in AWS for faster access
http://draftkingsretail.s3-website-us-west-1.amazonaws.com

### api calls
1.
Get Array List from AssginedCoupons

https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/assignedcoupon
[
  {
    "id": 1,
    "customer_id": 4,
    "created_at": 1649377263595,
    "coupon_id": 6
  },
  {
    "id": 2,
    "customer_id": 4,
    "created_at": 1649377324655,
    "coupon_id": 5
  },
  {
    "id": 3,
    "customer_id": 4,
    "created_at": 1649377333491,
    "coupon_id": 1
  },
  {
    "id": 4,
    "customer_id": 4,
    "created_at": 1649377342602,
    "coupon_id": 4
  },
  {
    "id": 5,
    "customer_id": 4,
    "created_at": 1649377358493,
    "coupon_id": 2
  },
  {
    "id": 6,
    "customer_id": 3,
    "created_at": 1649377374756,
    "coupon_id": 5
  },
  {
    "id": 7,
    "customer_id": 3,
    "created_at": 1649377394162,
    "coupon_id": 4
  },
  {
    "id": 8,
    "customer_id": 2,
    "created_at": 1649377410896,
    "coupon_id": 3
  },
  {
    "id": 9,
    "customer_id": 0,
    "created_at": 1649377421667,
    "coupon_id": 0
  }
]

2.
Get Array List from CouponsTable

https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/coupon
[
  {
    "id": 1,
    "description": "10% Coupon",
    "unitPrice": 10,
    "created_at": 1649376924811
  },
  {
    "id": 2,
    "description": "5% Refer a friend coupon",
    "unitPrice": 5,
    "created_at": 1649377006948
  },
  {
    "id": 3,
    "description": "20% Spend more than $100 Coupon",
    "unitPrice": 20,
    "created_at": 1649377028167
  },
  {
    "id": 4,
    "description": "15% Multi Discount",
    "unitPrice": 15,
    "created_at": 1649377049473
  },
  {
    "id": 5,
    "description": "3% Spring Sale Coupon",
    "unitPrice": 3,
    "created_at": 1649377074071
  },
  {
    "id": 6,
    "description": "15% Loyal Customer",
    "unitPrice": 15,
    "created_at": 1649377111931
  }
]

3.
Get Array List from Customer

https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/customer
[
  {
    "id": 2,
    "yearly": 100,
    "name": "Cesar",
    "created_at": 1649377156430
  },
  {
    "id": 3,
    "yearly": 25,
    "name": "Rafael",
    "created_at": 1649377175354
  },
  {
    "id": 4,
    "yearly": 225,
    "name": "Albert",
    "created_at": 1649377187410
  }
]


4. This call does all the work by doing joins in the back-end

https://x8ki-letl-twmt.n7.xano.io/api:Z-_eHuah/customer_assigned_coupon

[
  {
    "id": 2,
    "yearly": 100,
    "name": "Cesar",
    "created_at": 1649377156430,
    "_assignedcoupon_of_customer": [
      {
        "id": 8,
        "customer_id": 2,
        "created_at": 1649377410896,
        "coupon_id": 3,
        "_coupon": [
          {
            "id": 3,
            "description": "20% Spend more than $100 Coupon",
            "unitPrice": 20,
            "created_at": 1649377028167
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "yearly": 225,
    "name": "Albert",
    "created_at": 1649377187410,
    "_assignedcoupon_of_customer": [
      {
        "id": 1,
        "customer_id": 4,
        "created_at": 1649377263595,
        "coupon_id": 6,
        "_coupon": [
          {
            "id": 6,
            "description": "15% Loyal Customer",
            "unitPrice": 15,
            "created_at": 1649377111931
          }
        ]
      },
      {
        "id": 2,
        "customer_id": 4,
        "created_at": 1649377324655,
        "coupon_id": 5,
        "_coupon": [
          {
            "id": 5,
            "description": "3% Spring Sale Coupon",
            "unitPrice": 3,
            "created_at": 1649377074071
          }
        ]
      },
      {
        "id": 3,
        "customer_id": 4,
        "created_at": 1649377333491,
        "coupon_id": 1,
        "_coupon": [
          {
            "id": 1,
            "description": "10% Coupon",
            "unitPrice": 10,
            "created_at": 1649376924811
          }
        ]
      },
      {
        "id": 4,
        "customer_id": 4,
        "created_at": 1649377342602,
        "coupon_id": 4,
        "_coupon": [
          {
            "id": 4,
            "description": "15% Multi Discount",
            "unitPrice": 15,
            "created_at": 1649377049473
          }
        ]
      },
      {
        "id": 5,
        "customer_id": 4,
        "created_at": 1649377358493,
        "coupon_id": 2,
        "_coupon": [
          {
            "id": 2,
            "description": "5% Refer a friend coupon",
            "unitPrice": 5,
            "created_at": 1649377006948
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "yearly": 25,
    "name": "Rafael",
    "created_at": 1649377175354,
    "_assignedcoupon_of_customer": [
      {
        "id": 6,
        "customer_id": 3,
        "created_at": 1649377374756,
        "coupon_id": 5,
        "_coupon": [
          {
            "id": 5,
            "description": "3% Spring Sale Coupon",
            "unitPrice": 3,
            "created_at": 1649377074071
          }
        ]
      },
      {
        "id": 7,
        "customer_id": 3,
        "created_at": 1649377394162,
        "coupon_id": 4,
        "_coupon": [
          {
            "id": 4,
            "description": "15% Multi Discount",
            "unitPrice": 15,
            "created_at": 1649377049473
          }
        ]
      }
    ]
  }
]

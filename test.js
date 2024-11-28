function fetchSaleOrders() {
    const model = "sale.order";
    const domain = []; // Fetch all records. Add conditions if needed.
    const fields = ["id", "name", "partner_id", "date_order", "amount_total"]; // Specify the fields you want to fetch.

    // Odoo's RPC call
    return new Promise((resolve, reject) => {
        odoo.define("fetch_sale_orders", function (require) {
            "use strict";
            const rpc = require("web.rpc");

            rpc.query({
                model: model,
                method: "search_read",
                args: [domain, fields],
            }).then((result) => {
                console.log("Sale Orders:", result); // Output the fetched records to the console.
                resolve(result); // Return the fetched records.
            }).catch((error) => {
                console.error("Error fetching Sale Orders:", error);
                reject(error); // Return the error.
            });
        });
    });
}

// Usage example
fetchSaleOrders()
    .then((orders) => {
        // Handle the retrieved orders
        console.log("Fetched orders:", orders);
    })
    .catch((error) => {
        // Handle the error
        console.error("Error:", error);
    });


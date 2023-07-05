const express = require("express");
const { newOrder, getSingleOrder, myOrder, getAllOrder, updateOrder, deleteOrder } = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();



router.route("https://arfmart.onrender.com/order/new").post(isAuthenticatedUser, newOrder);
router.route('https://arfmart.onrender.com/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route("https://arfmart.onrender.com/orders/me").get(isAuthenticatedUser, myOrder);

router.route("https://arfmart.onrender.com/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrder);
router.route("https://arfmart.onrender.com/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);
module.exports = router;
const router = require("express").Router();
const { permit } = require('../middlewares/auth.middleware');
const { ADMIN, INSTRUCTOR, STUDENT } = require('../constants/roles.constant');
let controller = require("../controllers/mediaType.controller");
router.get("/", permit(STUDENT, INSTRUCTOR, ADMIN), controller.getAll);
router.get("/getPublicMediaTypes", permit(STUDENT, INSTRUCTOR, ADMIN), controller.getPublicMediaTypes);
router.get("/:id", permit(STUDENT, INSTRUCTOR, ADMIN), controller.findById);
router.get("/search/:query", permit(STUDENT, INSTRUCTOR, ADMIN), controller.search);
router.post("/", permit(INSTRUCTOR, ADMIN), controller.create);
router.put("/editOrders", permit(INSTRUCTOR, ADMIN), controller.editOrders);
router.put("/:id", permit(INSTRUCTOR, ADMIN), controller.updateById);
router.delete("/:id", permit(INSTRUCTOR, ADMIN), controller.deleteById);
module.exports = router;
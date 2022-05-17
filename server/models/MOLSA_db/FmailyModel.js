import FmailyModelGenerated from "./generated/FmailyModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await FmailyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...FmailyModelGenerated,
  ...customModel
};

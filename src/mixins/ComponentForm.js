import { debounce, isEqual } from "lodash";
import { rules } from "./rules/rules";

export const ComponentFormMixin = {
  props: ["value"],
  data: () => ({ rules }),
  created() {
    Object.assign(this.form, this.value);
  },
  methods: {
    setForm() {
      if (!isEqual(this.form, this.value))
        this.form = { ...this.form, ...this.value };
    },
  },
  watch: {
    value: {
      handler() {
        this.setForm();
      },
      deep: true,
    },
    form: {
      handler: debounce(function () {
        if (!isEqual(this.form, this.value))
          this.$emit("input", { ...this.value, ...this.form });
      }, 250),
      deep: true,
    },
  },
};

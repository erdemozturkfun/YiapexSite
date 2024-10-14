import { defineStore } from "pinia";
export const useTransStore = defineStore("transparency", () => {
	const transparency = ref(true);
	function setTrans(val) {
		transparency.value = val;
	}
	return { transparency, setTrans };
});

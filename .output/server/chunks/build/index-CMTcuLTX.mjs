import { _ as __nuxt_component_1 } from './Button-DLq0kSUH.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, ref, unref, isRef, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, computed, toRef, useSSRContext } from 'vue';
import { useScroll, useElementSize, useResizeObserver } from '@vueuse/core';
import { m as mergeConfig, t as twMerge, a as appConfig } from './server.mjs';
import { u as useUI } from './Icon-DzycYtnF.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$2 } from './Container-DpXS18UO.mjs';
import { _ as __nuxt_component_0$3 } from './Card-fcf5-765.mjs';
import { _ as __nuxt_component_0$4 } from './nuxt-link-DT8iqv60.mjs';
import { u as useServicesStore } from './services-C3WPXYDX.mjs';
import './Link-D6MkXhLj.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'tailwind-merge';
import './useButtonGroup-DIM86quX.mjs';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-B5Wt8a7N.mjs';
import '@iconify/utils/lib/css/icon';

const carousel = {
  wrapper: "relative",
  container: "relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
  item: "flex flex-none snap-center",
  arrows: {
    wrapper: "flex items-center justify-between"
  },
  indicators: {
    wrapper: "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
    base: "rounded-full h-3 w-3",
    active: "bg-primary-500 dark:bg-primary-400",
    inactive: "bg-gray-100 dark:bg-gray-800"
  },
  default: {
    prevButton: {
      color: "black",
      class: "rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "black",
      class: "rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const useCarouselScroll = (el) => {
  ref(0);
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.carousel, carousel);
const _sfc_main$3 = defineComponent({
  components: {
    UButton: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    arrows: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    dir: {
      type: String,
      default: "ltr"
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props, { expose }) {
    const { ui, attrs } = useUI("carousel", toRef(props, "ui"), config, toRef(props, "class"));
    const carouselRef = ref();
    const itemWidth = ref(0);
    const { x } = useScroll(carouselRef, { behavior: "smooth" });
    const { width: carouselWidth } = useElementSize(carouselRef);
    useCarouselScroll();
    useResizeObserver(carouselRef, (entries) => {
      const [entry] = entries;
      itemWidth.value = entry?.target?.firstElementChild?.clientWidth || 0;
    });
    const isRtl = computed(() => props.dir === "rtl");
    const currentPage = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return isRtl.value ? Math.round(-x.value / itemWidth.value) + 1 : Math.round(x.value / itemWidth.value) + 1;
    });
    const pages = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      const itemDivisions = Math.round(carouselWidth.value / itemWidth.value);
      if (props.items.length <= itemDivisions) {
        return 0;
      }
      return props.items.length - itemDivisions + 1;
    });
    const isFirst = computed(() => currentPage.value <= 1);
    const isLast = computed(() => currentPage.value === pages.value);
    function onClickNext() {
      x.value += isRtl.value ? -itemWidth.value : itemWidth.value;
    }
    function onClickPrev() {
      x.value -= isRtl.value ? -itemWidth.value : itemWidth.value;
    }
    function onClick(page) {
      x.value = (page - 1) * itemWidth.value * (isRtl.value ? -1 : 1);
    }
    expose({
      pages,
      page: currentPage,
      prev: onClickPrev,
      next: onClickNext,
      select: onClick
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isFirst,
      isLast,
      carouselRef,
      pages,
      currentPage,
      onClickNext,
      onClickPrev,
      onClick,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { dir: _ctx.dir }, _attrs))} data-v-aa7b36ce><div class="${ssrRenderClass([_ctx.ui.container, "no-scrollbar"])}" data-v-aa7b36ce><!--[-->`);
  ssrRenderList(_ctx.items, (item, index2) => {
    _push(`<div class="${ssrRenderClass(_ctx.ui.item)}"${ssrRenderAttr("role", _ctx.indicators ? "tabpanel" : null)} data-v-aa7b36ce>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      item,
      index: index2
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.arrows) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.arrows.wrapper)}" data-v-aa7b36ce>`);
    ssrRenderSlot(_ctx.$slots, "prev", {
      onClick: _ctx.onClickPrev,
      disabled: _ctx.isFirst
    }, () => {
      if (_ctx.prevButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isFirst }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
          class: _ctx.twMerge(_ctx.ui.default.prevButton.class, _ctx.prevButton?.class),
          "aria-label": "Prev",
          onClick: _ctx.onClickPrev
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    ssrRenderSlot(_ctx.$slots, "next", {
      onClick: _ctx.onClickNext,
      disabled: _ctx.isLast
    }, () => {
      if (_ctx.nextButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isLast }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
          class: _ctx.twMerge(_ctx.ui.default.nextButton.class, _ctx.nextButton?.class),
          "aria-label": "Next",
          onClick: _ctx.onClickNext
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.indicators) {
    _push(`<div role="tablist" class="${ssrRenderClass(_ctx.ui.indicators.wrapper)}" data-v-aa7b36ce><!--[-->`);
    ssrRenderList(_ctx.pages, (page) => {
      ssrRenderSlot(_ctx.$slots, "indicator", {
        onClick: _ctx.onClick,
        active: page === _ctx.currentPage,
        page
      }, () => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", page === _ctx.currentPage)} class="${ssrRenderClass([
          _ctx.ui.indicators.base,
          page === _ctx.currentPage ? _ctx.ui.indicators.active : _ctx.ui.indicators.inactive
        ])}"${ssrRenderAttr("aria-label", `set slide ${page}`)} data-v-aa7b36ce></button>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aa7b36ce"]]), { __name: "UCarousel" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "homeCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    const slides = [
      {
        title: "Unbiased Qualification Testing",
        image: "/imgs/slider/unbiased-testing.jpg",
        link: "/services",
        buttonText: "View our services"
      },
      {
        title: "Tailored Service packages",
        image: "/imgs/slider/tailored-service-packages-washed.jpg",
        link: "/services",
        buttonText: "View our services"
      },
      {
        title: "Qualified Testing Engineers",
        image: "/imgs/slider/qualified-testing-engineers.jpg",
        link: "/services",
        buttonText: "View our services"
      },
      {
        title: "State Of The Art Testing Equipment",
        image: "/imgs/slider/state-of-art-testing.jpg",
        link: "/services",
        buttonText: "View our services"
      },
      {
        title: "UK, Europe & Worldwide Service",
        image: "/imgs/slider/uk-europe-worldwide-service.jpg",
        link: "/services",
        buttonText: "View our services"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-div min-h-[460px] sm:min-h-0" }, _attrs))} data-v-869819e7>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        modelValue: unref(currentSlide),
        "onUpdate:modelValue": ($event) => isRef(currentSlide) ? currentSlide.value = $event : null,
        items: slides,
        ui: {
          item: "flex-shrink-0 w-full",
          container: "w-full h-[460px] sm:h-auto"
        },
        class: "w-full",
        autoplay: 5e3,
        loop: true,
        effect: "fade"
      }, {
        item: withCtx(({ item: slide }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="swiper-slide relative max-h-[540px]" data-v-869819e7${_scopeId}><div class="banner-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full sm:w-4/5" data-v-869819e7${_scopeId}><h2 class="text-white text-5xl mb-10 bg-black bg-opacity-40 p-2.5 rounded-md sm:text-3xl sm:mb-8" data-v-869819e7${_scopeId}>${ssrInterpolate(slide.title)}</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: slide.link,
              color: "white",
              variant: "solid",
              class: "cta text-xl px-6 py-3"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(slide.buttonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(slide.buttonText), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><img${ssrRenderAttr("src", slide.image)} class="w-full h-full object-cover" data-v-869819e7${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "swiper-slide relative max-h-[540px]" }, [
                createVNode("div", { class: "banner-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full sm:w-4/5" }, [
                  createVNode("h2", { class: "text-white text-5xl mb-10 bg-black bg-opacity-40 p-2.5 rounded-md sm:text-3xl sm:mb-8" }, toDisplayString(slide.title), 1),
                  createVNode(_component_UButton, {
                    to: slide.link,
                    color: "white",
                    variant: "solid",
                    class: "cta text-xl px-6 py-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(slide.buttonText), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                createVNode("img", {
                  src: slide.image,
                  class: "w-full h-full object-cover"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        prev: withCtx(({ onClick }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "solid",
              icon: "i-heroicons-chevron-left",
              class: "absolute left-4 top-1/2 transform -translate-y-1/2 z-10",
              onClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "solid",
                icon: "i-heroicons-chevron-left",
                class: "absolute left-4 top-1/2 transform -translate-y-1/2 z-10",
                onClick
              }, null, 8, ["onClick"])
            ];
          }
        }),
        next: withCtx(({ onClick }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "solid",
              icon: "i-heroicons-chevron-right",
              class: "absolute right-4 top-1/2 transform -translate-y-1/2 z-10",
              onClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "solid",
                icon: "i-heroicons-chevron-right",
                class: "absolute right-4 top-1/2 transform -translate-y-1/2 z-10",
                onClick
              }, null, 8, ["onClick"])
            ];
          }
        }),
        indicators: withCtx(({ total, current, goTo }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2" data-v-869819e7${_scopeId}><!--[-->`);
            ssrRenderList(total, (index2) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: index2,
                color: current === index2 - 1 ? "white" : "gray",
                variant: "solid",
                size: "xs",
                class: "w-3 h-3 rounded-full",
                onClick: ($event) => goTo(index2 - 1)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(total, (index2) => {
                  return openBlock(), createBlock(_component_UButton, {
                    key: index2,
                    color: current === index2 - 1 ? "white" : "gray",
                    variant: "solid",
                    size: "xs",
                    class: "w-3 h-3 rounded-full",
                    onClick: ($event) => goTo(index2 - 1)
                  }, null, 8, ["color", "onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homeCarousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-869819e7"]]), { __name: "HomeCarousel" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "servicesCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    const servicesStore = useServicesStore();
    const services = computed(() => [...servicesStore.services]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0$1;
      const _component_UCard = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_UButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "servicesList" }, _attrs))} data-v-cb19db1d>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        modelValue: unref(currentSlide),
        "onUpdate:modelValue": ($event) => isRef(currentSlide) ? currentSlide.value = $event : null,
        items: unref(services),
        ui: {
          item: "flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        },
        class: "w-full"
      }, {
        item: withCtx(({ item: service }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="carousel-inner" data-v-cb19db1d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", `/imgs/${service.image}`)} class="w-full h-32 object-cover" data-v-cb19db1d${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: `/imgs/${service.image}`,
                      class: "w-full h-32 object-cover"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "carousel-link",
                    to: service.page
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(service.label)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(service.label), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<p class="snippet" data-v-cb19db1d${_scopeId2}>${ssrInterpolate(service.snippet)}</p>`);
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      class: "carousel-link",
                      to: service.page
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(service.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("p", { class: "snippet" }, toDisplayString(service.snippet), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "carousel-inner" }, [
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("img", {
                      src: `/imgs/${service.image}`,
                      class: "w-full h-32 object-cover"
                    }, null, 8, ["src"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      class: "carousel-link",
                      to: service.page
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(service.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("p", { class: "snippet" }, toDisplayString(service.snippet), 1)
                  ]),
                  _: 2
                }, 1024)
              ])
            ];
          }
        }),
        prev: withCtx(({ onClick }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "solid",
              icon: "i-heroicons-chevron-left",
              class: "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
              onClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "solid",
                icon: "i-heroicons-chevron-left",
                class: "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
                onClick
              }, null, 8, ["onClick"])
            ];
          }
        }),
        next: withCtx(({ onClick }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "solid",
              icon: "i-heroicons-chevron-right",
              class: "absolute right-2 top-1/2 transform -translate-y-1/2 z-10",
              onClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "solid",
                icon: "i-heroicons-chevron-right",
                class: "absolute right-2 top-1/2 transform -translate-y-1/2 z-10",
                onClick
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicesCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-cb19db1d"]]), { __name: "ServicesCarousel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeCarousel = __nuxt_component_0;
      const _component_UContainer = __nuxt_component_0$2;
      const _component_ServicesCarousel = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home pb-12" }, _attrs))} data-v-c54fdb27><div class="welcome flex flex-col-reverse overflow-hidden" data-v-c54fdb27><div class="bannerIntro bg-[var(--color-dblue)] text-white py-10 text-center sm:py-5 sm:px-5" data-v-c54fdb27><h1 class="text-4xl sm:text-2xl" data-v-c54fdb27>Balanced Air Specialists - Experts in Cleanroom Validation</h1></div>`);
      _push(ssrRenderComponent(_component_HomeCarousel, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="intro my-10" data-v-c54fdb27${_scopeId}><p data-v-c54fdb27${_scopeId}> HVAC systems are the lifeblood of any clean room, crucial to the operation and production of any pharmaceutical company. Products and processes that benefit from the control of airborne contamination include those in such industries as aerospace, microelectronics, pharmaceuticals, medical devices, healthcare, and food. We offer a vital maintenance service to such facilities which includes Air Handling Unit filters, AHU or terminal HEPA filters, AHU cleaning and sterilization, as well as other aspects covering all parts of HVAC systems. </p></div><div class="services" data-v-c54fdb27${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ServicesCarousel, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "intro my-10" }, [
                createVNode("p", null, " HVAC systems are the lifeblood of any clean room, crucial to the operation and production of any pharmaceutical company. Products and processes that benefit from the control of airborne contamination include those in such industries as aerospace, microelectronics, pharmaceuticals, medical devices, healthcare, and food. We offer a vital maintenance service to such facilities which includes Air Handling Unit filters, AHU or terminal HEPA filters, AHU cleaning and sterilization, as well as other aspects covering all parts of HVAC systems. ")
              ]),
              createVNode("div", { class: "services" }, [
                createVNode(_component_ServicesCarousel)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c54fdb27"]]);

export { index as default };
//# sourceMappingURL=index-CMTcuLTX.mjs.map

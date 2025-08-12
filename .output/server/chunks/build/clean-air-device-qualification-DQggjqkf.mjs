import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { _ as __nuxt_component_2 } from './cta-B1u54W-w.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Container-DpXS18UO.mjs';
import 'tailwind-merge';
import './Icon-DzycYtnF.mjs';
import './server.mjs';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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
import './index-B5Wt8a7N.mjs';
import '@iconify/utils/lib/css/icon';
import './Link-D6MkXhLj.mjs';
import './nuxt-link-DT8iqv60.mjs';
import './Card-fcf5-765.mjs';
import './Avatar-hXOE5YxQ.mjs';
import './useButtonGroup-DIM86quX.mjs';
import './services-C3WPXYDX.mjs';
import './Button-DLq0kSUH.mjs';

const _imports_0 = publicAssetsURL("/imgs/clean-air-device-qualification/1.jpg");
const _imports_1 = publicAssetsURL("/imgs/clean-air-device-qualification/2.jpg");
const _sfc_main = {
  name: "Services",
  components: {
    servicesSidebar: __nuxt_component_1,
    pageHeader: __nuxt_component_0,
    cta: __nuxt_component_2
  },
  data() {
    return {};
  },
  computed: {
    getCurrentPageMeta() {
      return this.$store.state.services.find(
        (obj) => obj.page === this.$route.path
      );
    }
  },
  head() {
    return {
      title: this.getCurrentPageMeta.seo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.getCurrentPageMeta.seo.description
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.getCurrentPageMeta.seo.description
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pageHeader = __nuxt_component_0;
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_router_link = resolveComponent("router-link");
  const _component_services_sidebar = __nuxt_component_1;
  const _component_cta = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-73d941b0>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-73d941b0>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, { md: "9" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_col, {
                            md: "12",
                            class: "text",
                            order: "2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-73d941b0${_scopeId5}> BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product &amp; protection of the operator. </p><p data-v-73d941b0${_scopeId5}> Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: </p><p data-v-73d941b0${_scopeId5}> Our specialist engineers can service &amp; maintain the following clean air devices: </p><ul class="no-style chevrons" data-v-73d941b0${_scopeId5}><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Microbiological Safety Cabinets (Class I/II/III). </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`VLAF laminar flow units. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HLAF laminar flow units. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Isolator Units. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Downflow benches. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Downflow booths. </li></ul><p data-v-73d941b0${_scopeId5}><strong data-v-73d941b0${_scopeId5}>Please contact us should you have any other type of clean air device that’s not listed above.</strong></p><p data-v-73d941b0${_scopeId5}> Tests include: </p><ul class="no-style chevrons" data-v-73d941b0${_scopeId5}><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Check operation of all switches, alarms &amp; pressure gauges. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Inspection &amp; replacement of all air filters (If required. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Airflow velocity verification. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light level verification. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Noise level verification. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HEPA DOP filter integrity test. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Non-Viable particle count verification. </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). </li><li data-v-73d941b0${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`KI-Discus – Operator protection test (BS EN 12469:2000)`);
                                    } else {
                                      return [
                                        createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</li></ul>`);
                              } else {
                                return [
                                  createVNode("p", null, " BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product & protection of the operator. "),
                                  createVNode("p", null, " Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: "),
                                  createVNode("p", null, " Our specialist engineers can service & maintain the following clean air devices: "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Microbiological Safety Cabinets (Class I/II/III). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("VLAF laminar flow units. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HLAF laminar flow units. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Isolator Units. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Downflow benches. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Downflow booths. ")
                                    ])
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "Please contact us should you have any other type of clean air device that’s not listed above.")
                                  ]),
                                  createVNode("p", null, " Tests include: "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Check operation of all switches, alarms & pressure gauges. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Inspection & replacement of all air filters (If required. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Airflow velocity verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light level verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Noise level verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HEPA DOP filter integrity test. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Non-Viable particle count verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createVNode(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                        default: withCtx(() => [
                                          createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_col, {
                            class: "main-images",
                            md: "12",
                            order: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-73d941b0${_scopeId7}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: _imports_0,
                                                class: "img-fluid shadow-sm"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_1)} class="img-fluid shadow-sm" data-v-73d941b0${_scopeId7}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: _imports_1,
                                                class: "img-fluid shadow-sm"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_b_col, { md: "6" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_0,
                                              class: "img-fluid shadow-sm"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_b_col, { md: "6" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_1,
                                              class: "img-fluid shadow-sm"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_col, { md: "6" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            class: "img-fluid shadow-sm"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_b_col, { md: "6" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_1,
                                            class: "img-fluid shadow-sm"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_col, {
                              md: "12",
                              class: "text",
                              order: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, " BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product & protection of the operator. "),
                                createVNode("p", null, " Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: "),
                                createVNode("p", null, " Our specialist engineers can service & maintain the following clean air devices: "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Microbiological Safety Cabinets (Class I/II/III). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("VLAF laminar flow units. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HLAF laminar flow units. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Isolator Units. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Downflow benches. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Downflow booths. ")
                                  ])
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "Please contact us should you have any other type of clean air device that’s not listed above.")
                                ]),
                                createVNode("p", null, " Tests include: "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Check operation of all switches, alarms & pressure gauges. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Inspection & replacement of all air filters (If required. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Airflow velocity verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light level verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Noise level verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HEPA DOP filter integrity test. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Non-Viable particle count verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createVNode(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                      default: withCtx(() => [
                                        createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, {
                              class: "main-images",
                              md: "12",
                              order: "1"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_col, { md: "6" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          class: "img-fluid shadow-sm"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_b_col, { md: "6" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_1,
                                          class: "img-fluid shadow-sm"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "12",
                            class: "text",
                            order: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, " BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product & protection of the operator. "),
                              createVNode("p", null, " Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: "),
                              createVNode("p", null, " Our specialist engineers can service & maintain the following clean air devices: "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Microbiological Safety Cabinets (Class I/II/III). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("VLAF laminar flow units. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HLAF laminar flow units. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Isolator Units. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Downflow benches. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Downflow booths. ")
                                ])
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "Please contact us should you have any other type of clean air device that’s not listed above.")
                              ]),
                              createVNode("p", null, " Tests include: "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Check operation of all switches, alarms & pressure gauges. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Inspection & replacement of all air filters (If required. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Airflow velocity verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light level verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Noise level verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HEPA DOP filter integrity test. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Non-Viable particle count verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createVNode(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                    default: withCtx(() => [
                                      createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, {
                            class: "main-images",
                            md: "12",
                            order: "1"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "img-fluid shadow-sm"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_1,
                                        class: "img-fluid shadow-sm"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, { md: "3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_services_sidebar, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_services_sidebar)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, { md: "9" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
                          md: "12",
                          class: "text",
                          order: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, " BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product & protection of the operator. "),
                            createVNode("p", null, " Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: "),
                            createVNode("p", null, " Our specialist engineers can service & maintain the following clean air devices: "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Microbiological Safety Cabinets (Class I/II/III). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("VLAF laminar flow units. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HLAF laminar flow units. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Isolator Units. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Downflow benches. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Downflow booths. ")
                              ])
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "Please contact us should you have any other type of clean air device that’s not listed above.")
                            ]),
                            createVNode("p", null, " Tests include: "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Check operation of all switches, alarms & pressure gauges. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Inspection & replacement of all air filters (If required. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Airflow velocity verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light level verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Noise level verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HEPA DOP filter integrity test. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Non-Viable particle count verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createVNode(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                  default: withCtx(() => [
                                    createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, {
                          class: "main-images",
                          md: "12",
                          order: "1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "img-fluid shadow-sm"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "img-fluid shadow-sm"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, { md: "3" }, {
                  default: withCtx(() => [
                    createVNode(_component_services_sidebar)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, { md: "9" }, {
                default: withCtx(() => [
                  createVNode(_component_b_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_col, {
                        md: "12",
                        class: "text",
                        order: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, " BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment. It’s vital for all clean air devices to be routinely tested in line with regulatory standards such as BS 5726:2005, BS EN 12469:2000, ISO 14644, to ensure continual compliance, protection of the product & protection of the operator. "),
                          createVNode("p", null, " Our specialist engineers can perform various performance and safety tests as part of a routine service agreement or ad-hoc service visit. Available tests include: "),
                          createVNode("p", null, " Our specialist engineers can service & maintain the following clean air devices: "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Microbiological Safety Cabinets (Class I/II/III). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("VLAF laminar flow units. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HLAF laminar flow units. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Isolator Units. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Downflow benches. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Downflow booths. ")
                            ])
                          ]),
                          createVNode("p", null, [
                            createVNode("strong", null, "Please contact us should you have any other type of clean air device that’s not listed above.")
                          ]),
                          createVNode("p", null, " Tests include: "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Check operation of all switches, alarms & pressure gauges. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Inspection & replacement of all air filters (If required. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Airflow velocity verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light level verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Noise level verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HEPA DOP filter integrity test. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Non-Viable particle count verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Smoke visualisation studies including editing service (Option of professional camera crew service – Grade A). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createVNode(_component_router_link, { to: "ki-discus-operator-protection-test" }, {
                                default: withCtx(() => [
                                  createTextVNode("KI-Discus – Operator protection test (BS EN 12469:2000)")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        class: "main-images",
                        md: "12",
                        order: "1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "img-fluid shadow-sm"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_1,
                                    class: "img-fluid shadow-sm"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_b_col, { md: "3" }, {
                default: withCtx(() => [
                  createVNode(_component_services_sidebar)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_cta, { "cta-text": "Get in touch today" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clean-air-device-qualification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cleanAirDeviceQualification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-73d941b0"]]);

export { cleanAirDeviceQualification as default };
//# sourceMappingURL=clean-air-device-qualification-DQggjqkf.mjs.map

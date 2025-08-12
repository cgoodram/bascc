import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { _ as __nuxt_component_2 } from './cta-B1u54W-w.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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

const _imports_0 = publicAssetsURL("/imgs/healthcare-ventilation-verification/1.jpg");
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
      title: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.title : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.description : ""
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.description : ""
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
  const _component_services_sidebar = __nuxt_component_1;
  const _component_cta = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-4056b7be>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: "Healthcare ventilation verification", url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-4056b7be>`);
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
                                _push6(`<p data-v-4056b7be${_scopeId5}> In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. </p><p data-v-4056b7be${_scopeId5}> Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: </p><ul class="no-style chevrons" data-v-4056b7be${_scopeId5}><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Sterile Service Departments. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Isolation Rooms. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`CL2/CL3 Labs. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Minor Procedure Wards. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Hospital Wards. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Pharmacies. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Critical Care Units. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Operating Theatres. </li></ul><p data-v-4056b7be${_scopeId5}> Our specialist engineers are all certified by the City &amp; Guilds (HTM-03) and can provide all your testing requirements for both non-critical &amp; critical environments. </p><p data-v-4056b7be${_scopeId5}> Test we can perform: </p><ul class="no-style chevrons" data-v-4056b7be${_scopeId5}><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HTM-03-01 AHU Inspection. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HTM-03-01 Suite Inspection. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Air Change rate Verification. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Room pressure differential verification. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Duct Traverse recording. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light Levels. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Sound Levels. </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`DOP filter integrity testing (DOP+DPC method). </li><li data-v-4056b7be${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Area Non-Viable particle counts. </li></ul><p data-v-4056b7be${_scopeId5}> All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. "),
                                  createVNode("p", null, " Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Sterile Service Departments. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Isolation Rooms. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("CL2/CL3 Labs. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Minor Procedure Wards. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Hospital Wards. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Pharmacies. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Critical Care Units. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Operating Theatres. ")
                                    ])
                                  ]),
                                  createVNode("p", null, " Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. "),
                                  createVNode("p", null, " Test we can perform: "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HTM-03-01 AHU Inspection. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HTM-03-01 Suite Inspection. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Air Change rate Verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Room pressure differential verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Duct Traverse recording. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light Levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Sound Levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("DOP filter integrity testing (DOP+DPC method). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Area Non-Viable particle counts. ")
                                    ])
                                  ]),
                                  createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                                      _push7(ssrRenderComponent(_component_b_col, { md: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-4056b7be${_scopeId7}>`);
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
                                    } else {
                                      return [
                                        createVNode(_component_b_col, { md: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_0,
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
                                      createVNode(_component_b_col, { md: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
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
                                createVNode("p", null, " In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. "),
                                createVNode("p", null, " Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Sterile Service Departments. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Isolation Rooms. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("CL2/CL3 Labs. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Minor Procedure Wards. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Hospital Wards. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Pharmacies. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Critical Care Units. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Operating Theatres. ")
                                  ])
                                ]),
                                createVNode("p", null, " Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. "),
                                createVNode("p", null, " Test we can perform: "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HTM-03-01 AHU Inspection. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HTM-03-01 Suite Inspection. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Air Change rate Verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Room pressure differential verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Duct Traverse recording. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light Levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Sound Levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("DOP filter integrity testing (DOP+DPC method). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Area Non-Viable particle counts. ")
                                  ])
                                ]),
                                createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                                    createVNode(_component_b_col, { md: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
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
                              createVNode("p", null, " In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. "),
                              createVNode("p", null, " Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Sterile Service Departments. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Isolation Rooms. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("CL2/CL3 Labs. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Minor Procedure Wards. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Hospital Wards. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Pharmacies. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Critical Care Units. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Operating Theatres. ")
                                ])
                              ]),
                              createVNode("p", null, " Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. "),
                              createVNode("p", null, " Test we can perform: "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HTM-03-01 AHU Inspection. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HTM-03-01 Suite Inspection. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Air Change rate Verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Room pressure differential verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Duct Traverse recording. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light Levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Sound Levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("DOP filter integrity testing (DOP+DPC method). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Area Non-Viable particle counts. ")
                                ])
                              ]),
                              createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                                  createVNode(_component_b_col, { md: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
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
                            createVNode("p", null, " In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. "),
                            createVNode("p", null, " Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Sterile Service Departments. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Isolation Rooms. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("CL2/CL3 Labs. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Minor Procedure Wards. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Hospital Wards. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Pharmacies. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Critical Care Units. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Operating Theatres. ")
                              ])
                            ]),
                            createVNode("p", null, " Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. "),
                            createVNode("p", null, " Test we can perform: "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HTM-03-01 AHU Inspection. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HTM-03-01 Suite Inspection. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Air Change rate Verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Room pressure differential verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Duct Traverse recording. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light Levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Sound Levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("DOP filter integrity testing (DOP+DPC method). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Area Non-Viable particle counts. ")
                              ])
                            ]),
                            createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                                createVNode(_component_b_col, { md: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
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
                          createVNode("p", null, " In healthcare premises, standard and critical ventilation systems are used extensively in all types of facilities to provide a safe, hygienic and comfortable environment for all patients and staff. "),
                          createVNode("p", null, " Specialised ventilation must be provided in patient treatment areas to ensure compliance with quality assurance standards. These areas include: "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Sterile Service Departments. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Isolation Rooms. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("CL2/CL3 Labs. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Minor Procedure Wards. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Hospital Wards. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Pharmacies. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Critical Care Units. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Operating Theatres. ")
                            ])
                          ]),
                          createVNode("p", null, " Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. "),
                          createVNode("p", null, " Test we can perform: "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HTM-03-01 AHU Inspection. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HTM-03-01 Suite Inspection. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Air Change rate Verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Room pressure differential verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Duct Traverse recording. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light Levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Sound Levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("DOP filter integrity testing (DOP+DPC method). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Area Non-Viable particle counts. ")
                            ])
                          ]),
                          createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                              createVNode(_component_b_col, { md: "12" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/healthcare-ventilation-verification-htm-03-01.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const healthcareVentilationVerificationHtm0301 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4056b7be"]]);

export { healthcareVentilationVerificationHtm0301 as default };
//# sourceMappingURL=healthcare-ventilation-verification-htm-03-01-DsSVQAYW.mjs.map

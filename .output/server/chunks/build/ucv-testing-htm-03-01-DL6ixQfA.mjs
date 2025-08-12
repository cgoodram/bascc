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

const _imports_0 = publicAssetsURL("/imgs/ucv-testing/1.jpg");
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-27575327>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-27575327>`);
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
                                _push6(`<p data-v-27575327${_scopeId5}> Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. </p><p data-v-27575327${_scopeId5}> Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City &amp; Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). </p><p data-v-27575327${_scopeId5}><strong data-v-27575327${_scopeId5}>Test we can perform:</strong></p><h2 class="h2" data-v-27575327${_scopeId5}> Operating Theatre Service. </h2><p data-v-27575327${_scopeId5}><strong data-v-27575327${_scopeId5}>Recommended for Annual Verification:</strong></p><h2 class="h2" data-v-27575327${_scopeId5}> Ultra-Clean Ventilated Canopy (UCV) Theatres </h2><ul class="no-style chevrons" data-v-27575327${_scopeId5}><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HTM-03-01 AHU Inspection. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Air Change Rate Verification. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Non-Viable particle counts. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HEPA filter integrity test (DOP or DPC scan method). </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Confirmation of UCV critical area velocities (1/2m). </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Room pressure differential verification. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Temperature &amp; Humidity logging. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Noise levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light Levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`UCV function checks. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Re-entrainment test (optional). </li></ul><p data-v-27575327${_scopeId5}><strong data-v-27575327${_scopeId5}>Recommended for Bi-Annual Verification:</strong></p><h2 class="h2" data-v-27575327${_scopeId5}>Ultra-Clean Ventilated Canopy (UCV) Theatres</h2><ul class="no-style chevrons" data-v-27575327${_scopeId5}><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HTM-03-01 AHU Inspection. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Replacement of pre-filters. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Confirmation of UCV critical area velocities (1/2m). </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Noise levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light Levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Temperature &amp; Humidity logging. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`UCV function checks. </li></ul><h2 class="h2" data-v-27575327${_scopeId5}>Conventional Theatres</h2><ul class="no-style chevrons" data-v-27575327${_scopeId5}><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HTM-03-01 AHU Inspection. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Air Change Rate Verification. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Non-Viable particle counts. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HEPA filter integrity test (DOP + DPC method). </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Room pressure differential verification. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Temperature &amp; Humidity logging. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Noise levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light Levels. </li><li data-v-27575327${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`UCV function checks. </li></ul><p data-v-27575327${_scopeId5}> All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. "),
                                  createVNode("p", null, " Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City & Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). "),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "Test we can perform:")
                                  ]),
                                  createVNode("h2", { class: "h2" }, " Operating Theatre Service. "),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "Recommended for Annual Verification:")
                                  ]),
                                  createVNode("h2", { class: "h2" }, " Ultra-Clean Ventilated Canopy (UCV) Theatres "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HTM-03-01 AHU Inspection. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Air Change Rate Verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Non-Viable particle counts. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HEPA filter integrity test (DOP or DPC scan method). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Room pressure differential verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Temperature & Humidity logging. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Noise levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light Levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("UCV function checks. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Re-entrainment test (optional). ")
                                    ])
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "Recommended for Bi-Annual Verification:")
                                  ]),
                                  createVNode("h2", { class: "h2" }, "Ultra-Clean Ventilated Canopy (UCV) Theatres"),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HTM-03-01 AHU Inspection. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Replacement of pre-filters. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Noise levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light Levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Temperature & Humidity logging. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("UCV function checks. ")
                                    ])
                                  ]),
                                  createVNode("h2", { class: "h2" }, "Conventional Theatres"),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HTM-03-01 AHU Inspection. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Air Change Rate Verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Non-Viable particle counts. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HEPA filter integrity test (DOP + DPC method). ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Room pressure differential verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Temperature & Humidity logging. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Noise levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light Levels. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("UCV function checks. ")
                                    ])
                                  ]),
                                  createVNode("p", null, " All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-27575327${_scopeId7}>`);
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
                                createVNode("p", null, " Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. "),
                                createVNode("p", null, " Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City & Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). "),
                                createVNode("p", null, [
                                  createVNode("strong", null, "Test we can perform:")
                                ]),
                                createVNode("h2", { class: "h2" }, " Operating Theatre Service. "),
                                createVNode("p", null, [
                                  createVNode("strong", null, "Recommended for Annual Verification:")
                                ]),
                                createVNode("h2", { class: "h2" }, " Ultra-Clean Ventilated Canopy (UCV) Theatres "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HTM-03-01 AHU Inspection. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Air Change Rate Verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Non-Viable particle counts. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HEPA filter integrity test (DOP or DPC scan method). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Room pressure differential verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Temperature & Humidity logging. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Noise levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light Levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("UCV function checks. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Re-entrainment test (optional). ")
                                  ])
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "Recommended for Bi-Annual Verification:")
                                ]),
                                createVNode("h2", { class: "h2" }, "Ultra-Clean Ventilated Canopy (UCV) Theatres"),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HTM-03-01 AHU Inspection. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Replacement of pre-filters. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Noise levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light Levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Temperature & Humidity logging. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("UCV function checks. ")
                                  ])
                                ]),
                                createVNode("h2", { class: "h2" }, "Conventional Theatres"),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HTM-03-01 AHU Inspection. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Air Change Rate Verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Non-Viable particle counts. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HEPA filter integrity test (DOP + DPC method). ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Room pressure differential verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Temperature & Humidity logging. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Noise levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light Levels. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("UCV function checks. ")
                                  ])
                                ]),
                                createVNode("p", null, " All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                              createVNode("p", null, " Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. "),
                              createVNode("p", null, " Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City & Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). "),
                              createVNode("p", null, [
                                createVNode("strong", null, "Test we can perform:")
                              ]),
                              createVNode("h2", { class: "h2" }, " Operating Theatre Service. "),
                              createVNode("p", null, [
                                createVNode("strong", null, "Recommended for Annual Verification:")
                              ]),
                              createVNode("h2", { class: "h2" }, " Ultra-Clean Ventilated Canopy (UCV) Theatres "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HTM-03-01 AHU Inspection. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Air Change Rate Verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Non-Viable particle counts. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HEPA filter integrity test (DOP or DPC scan method). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Room pressure differential verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Temperature & Humidity logging. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Noise levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light Levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("UCV function checks. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Re-entrainment test (optional). ")
                                ])
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "Recommended for Bi-Annual Verification:")
                              ]),
                              createVNode("h2", { class: "h2" }, "Ultra-Clean Ventilated Canopy (UCV) Theatres"),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HTM-03-01 AHU Inspection. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Replacement of pre-filters. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Noise levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light Levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Temperature & Humidity logging. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("UCV function checks. ")
                                ])
                              ]),
                              createVNode("h2", { class: "h2" }, "Conventional Theatres"),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HTM-03-01 AHU Inspection. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Air Change Rate Verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Non-Viable particle counts. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HEPA filter integrity test (DOP + DPC method). ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Room pressure differential verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Temperature & Humidity logging. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Noise levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light Levels. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("UCV function checks. ")
                                ])
                              ]),
                              createVNode("p", null, " All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                            createVNode("p", null, " Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. "),
                            createVNode("p", null, " Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City & Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). "),
                            createVNode("p", null, [
                              createVNode("strong", null, "Test we can perform:")
                            ]),
                            createVNode("h2", { class: "h2" }, " Operating Theatre Service. "),
                            createVNode("p", null, [
                              createVNode("strong", null, "Recommended for Annual Verification:")
                            ]),
                            createVNode("h2", { class: "h2" }, " Ultra-Clean Ventilated Canopy (UCV) Theatres "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HTM-03-01 AHU Inspection. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Air Change Rate Verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Non-Viable particle counts. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HEPA filter integrity test (DOP or DPC scan method). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Room pressure differential verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Temperature & Humidity logging. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Noise levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light Levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("UCV function checks. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Re-entrainment test (optional). ")
                              ])
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "Recommended for Bi-Annual Verification:")
                            ]),
                            createVNode("h2", { class: "h2" }, "Ultra-Clean Ventilated Canopy (UCV) Theatres"),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HTM-03-01 AHU Inspection. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Replacement of pre-filters. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Noise levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light Levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Temperature & Humidity logging. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("UCV function checks. ")
                              ])
                            ]),
                            createVNode("h2", { class: "h2" }, "Conventional Theatres"),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HTM-03-01 AHU Inspection. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Air Change Rate Verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Non-Viable particle counts. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HEPA filter integrity test (DOP + DPC method). ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Room pressure differential verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Temperature & Humidity logging. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Noise levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light Levels. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("UCV function checks. ")
                              ])
                            ]),
                            createVNode("p", null, " All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
                          createVNode("p", null, " Post-operative infection is strongly influenced by the suitability and level of airborne contaminates within an operating room. To minimise infection risk, many procedures are carried out under an ultra-clean ventilated canopy (UCV) and these need to be inspected quarterly and their performance measured and verified annually. "),
                          createVNode("p", null, " Our specialist engineers have a vast amount of experience in the qualification of UCV systems and are all certified by the City & Guilds (HTM-03) We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system. Our system inspection assesses and verifies compliance to existing guidance (HTM 03-01). "),
                          createVNode("p", null, [
                            createVNode("strong", null, "Test we can perform:")
                          ]),
                          createVNode("h2", { class: "h2" }, " Operating Theatre Service. "),
                          createVNode("p", null, [
                            createVNode("strong", null, "Recommended for Annual Verification:")
                          ]),
                          createVNode("h2", { class: "h2" }, " Ultra-Clean Ventilated Canopy (UCV) Theatres "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HTM-03-01 AHU Inspection. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Air Change Rate Verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Non-Viable particle counts. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HEPA filter integrity test (DOP or DPC scan method). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Room pressure differential verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Temperature & Humidity logging. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Noise levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light Levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("UCV function checks. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Re-entrainment test (optional). ")
                            ])
                          ]),
                          createVNode("p", null, [
                            createVNode("strong", null, "Recommended for Bi-Annual Verification:")
                          ]),
                          createVNode("h2", { class: "h2" }, "Ultra-Clean Ventilated Canopy (UCV) Theatres"),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HTM-03-01 AHU Inspection. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Replacement of pre-filters. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Confirmation of UCV critical area velocities (1/2m). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Noise levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light Levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Temperature & Humidity logging. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("UCV function checks. ")
                            ])
                          ]),
                          createVNode("h2", { class: "h2" }, "Conventional Theatres"),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HTM-03-01 AHU Inspection. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Air Change Rate Verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Non-Viable particle counts. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HEPA filter integrity test (DOP + DPC method). ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Room pressure differential verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Temperature & Humidity logging. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Noise levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light Levels. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("UCV function checks. ")
                            ])
                          ]),
                          createVNode("p", null, " All of the testing performed will be documented in a detailed report upon completion of the works in line with HTM-03-01 guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the results found and documented. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ucv-testing-htm-03-01.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ucvTestingHtm0301 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-27575327"]]);

export { ucvTestingHtm0301 as default };
//# sourceMappingURL=ucv-testing-htm-03-01-DL6ixQfA.mjs.map

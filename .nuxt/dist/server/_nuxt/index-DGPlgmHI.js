import { _ as __nuxt_component_0$1 } from "./nuxt-link-BSFgMzag.js";
import { withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useFetch } from "./fetch-DXIPJ5Pn.js";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "ohash";
const _sfc_main$1 = {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      categData: [
        {
          id: "1",
          linkTo: "/electronics",
          images: {
            url: "categ01.png",
            alt: "thumb categ01"
          }
        },
        {
          id: "2",
          linkTo: "/jewelery",
          images: {
            url: "categ02.png",
            alt: "thumb categ02"
          }
        },
        {
          id: "3",
          linkTo: "/mens-clothing",
          images: {
            url: "categ03.png",
            alt: "thumb categ03"
          }
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><div class="container-fluid h-[30vw] banner-bg bg-bottom"></div><div class="container-fluid"><div class="container-full"><div class="grid grid-cols-3 py-[20px]"><!--[-->`);
  ssrRenderList($data.categData, (item) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: item.linkTo
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><img${ssrRenderAttr("src", `/_nuxt/assets/images/home/${item.images.url}`)}${ssrRenderAttr("alt", item.images.alt)} height="100%" width="100%"${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("img", {
                src: `/_nuxt/assets/images/home/${item.images.url}`,
                alt: item.images.alt,
                height: "100%",
                width: "100%"
              }, null, 8, ["src", "alt"])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="space-y-[20px]"><h5 class="text-20px text-center font-bold uppercase">Popular Products</h5><div class="grid grid-cols-4 gap-[10px]"><!--[-->`);
  ssrRenderList($props.products, (product) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/products/${product.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="space-y-[10px]"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", product.image)} alt="images" class="w-[250px] h-[250px]"${_scopeId}></div><p class="text-14px text-center"${_scopeId}>${ssrInterpolate(product.title)}</p><p class="text-14px text-center"${_scopeId}>$${ssrInterpolate(product.price)}</p></div>`);
        } else {
          return [
            createVNode("div", { class: "space-y-[10px]" }, [
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("img", {
                  src: product.image,
                  alt: "images",
                  class: "w-[250px] h-[250px]"
                }, null, 8, ["src"])
              ]),
              createVNode("p", { class: "text-14px text-center" }, toDisplayString(product.title), 1),
              createVNode("p", { class: "text-14px text-center" }, "$" + toDisplayString(product.price), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-center"${_scopeId}>See More</p>`);
      } else {
        return [
          createVNode("p", { class: "text-center" }, "See More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="h-[20vw] footer-bg bg-no-repeat bg-cover bg-bottom"></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://fakestoreapi.com/products?limit=12&sort=desc`, "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Home = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Home, { products: unref(products) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DGPlgmHI.js.map

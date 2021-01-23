(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(t,v,a){t.exports=a.p+"assets/img/avl-tree.f4642fa8.png"},365:function(t,v,a){t.exports=a.p+"assets/img/avl-tree-rebalancing.ebf5d7a7.png"},392:function(t,v,a){"use strict";a.r(v);var _=a(45),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"平衡二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平衡二叉树"}},[t._v("#")]),t._v(" 平衡二叉树")]),t._v(" "),_("p",[t._v("平衡二叉查找树，简称：平衡二叉树，由前苏联的数学家 Adelse-Velskil 和 Landis 在1962 年提出的高度平衡的二叉树，根据科学家的英文名也称为AVL 树。指的是所有节点平衡因子的绝对值不大于1的二叉树叫做平衡二叉树。")]),t._v(" "),_("p",[t._v("你可以通过 "),_("a",{attrs:{href:"https://www.cs.usfca.edu/~galles/visualization/AVLtree.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AVL Tree Visualzation"),_("OutboundLink")],1),t._v(" 来模拟AVL树的各个操作。")]),t._v(" "),_("blockquote",[_("p",[t._v("平衡因子：左子树高减去右子树高")])]),t._v(" "),_("blockquote",[_("p",[t._v("平衡二叉树并不一定是一个完全二叉树，例如高度为4且非叶子节点平衡因子均为1的AVL树")]),t._v(" "),_("p",[_("img",{attrs:{src:a(364),alt:"image-20210115121840387"}})]),t._v(" "),_("p",[t._v("由上图我们还可以发现，高度为4的AVL树最少有7个节点，最多有15个节点")])]),t._v(" "),_("h2",{attrs:{id:"插入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[t._v("#")]),t._v(" 插入")]),t._v(" "),_("p",[t._v("插入操作与二叉排序树相似，但插入后可能引起[失衡][#失衡]。")]),t._v(" "),_("ol",[_("li",[t._v("通过排序规则选择合适的插入位置")]),t._v(" "),_("li",[t._v("创建一新的叶子节点，插入该位置")]),t._v(" "),_("li",[t._v("向上更新路径上每个节点的平衡因子，当平衡因子的绝对值大于1时引起失衡，先进行平衡操作")]),t._v(" "),_("li",[t._v("重复步骤3，直到达到根节点")])]),t._v(" "),_("h2",{attrs:{id:"删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),_("p",[t._v("插入操作与二叉排序树相似，但插入后可能引起[失衡][#失衡]。")]),t._v(" "),_("ol",[_("li",[t._v("通过查找规则找到删除节点，找不到则结束，如果为只有一个节点的树的根节点，则删除根节点后结束")]),t._v(" "),_("li",[t._v("找到删除节点在中序遍历中的前驱节点或后继节点（必为叶子节点）")]),t._v(" "),_("li",[t._v("交换两节点，删除叶子节点")]),t._v(" "),_("li",[t._v("向上更新路径上每个节点的平衡因子，当平衡因子的绝对值大于1时引起失衡，先进行平衡操作")]),t._v(" "),_("li",[t._v("重复步骤4，直到达到根节点")])]),t._v(" "),_("h2",{attrs:{id:"查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[t._v("#")]),t._v(" 查找")]),t._v(" "),_("p",[t._v("查找操作与二叉排序树相同，因为AVL树总是平衡的，所以耗费O(log "),_("em",[t._v("n")]),t._v(")时间。AVL树不会因查找过程而改变。")]),t._v(" "),_("h2",{attrs:{id:"失衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#失衡"}},[t._v("#")]),t._v(" 失衡")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("LL")]),t._v("：对失衡节点顺时针旋转")]),t._v(" "),_("li",[_("strong",[t._v("LR")]),t._v("：对失衡节点左孩子节点逆时针旋转，对失衡节点顺时针旋转")]),t._v(" "),_("li",[_("strong",[t._v("RR")]),t._v("：对失衡节点逆时针旋转")]),t._v(" "),_("li",[_("strong",[t._v("RL")]),t._v("：对失衡节点左孩子节点顺时针旋转，对失衡节点逆时针旋转")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(365),alt:"AVL Tree Rebalancing"}})])])}),[],!1,null,null,null);v.default=e.exports}}]);
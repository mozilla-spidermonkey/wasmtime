(function() {var implementors = {};
implementors["clif_json"] = [{"text":"impl Hash for SerInstData","synthetic":false,"types":[]}];
implementors["cranelift_codegen"] = [{"text":"impl Hash for AtomicRmwOp","synthetic":false,"types":[]},{"text":"impl Hash for ConstantData","synthetic":false,"types":[]},{"text":"impl Hash for Block","synthetic":false,"types":[]},{"text":"impl Hash for Value","synthetic":false,"types":[]},{"text":"impl Hash for Inst","synthetic":false,"types":[]},{"text":"impl Hash for StackSlot","synthetic":false,"types":[]},{"text":"impl Hash for GlobalValue","synthetic":false,"types":[]},{"text":"impl Hash for Constant","synthetic":false,"types":[]},{"text":"impl Hash for Immediate","synthetic":false,"types":[]},{"text":"impl Hash for JumpTable","synthetic":false,"types":[]},{"text":"impl Hash for FuncRef","synthetic":false,"types":[]},{"text":"impl Hash for SigRef","synthetic":false,"types":[]},{"text":"impl Hash for Heap","synthetic":false,"types":[]},{"text":"impl Hash for Table","synthetic":false,"types":[]},{"text":"impl Hash for AnyEntity","synthetic":false,"types":[]},{"text":"impl Hash for Signature","synthetic":false,"types":[]},{"text":"impl Hash for AbiParam","synthetic":false,"types":[]},{"text":"impl Hash for ArgumentExtension","synthetic":false,"types":[]},{"text":"impl Hash for ArgumentPurpose","synthetic":false,"types":[]},{"text":"impl Hash for Imm64","synthetic":false,"types":[]},{"text":"impl Hash for Uimm64","synthetic":false,"types":[]},{"text":"impl Hash for Uimm32","synthetic":false,"types":[]},{"text":"impl Hash for V128Imm","synthetic":false,"types":[]},{"text":"impl Hash for Offset32","synthetic":false,"types":[]},{"text":"impl Hash for Ieee32","synthetic":false,"types":[]},{"text":"impl Hash for Ieee64","synthetic":false,"types":[]},{"text":"impl Hash for Opcode","synthetic":false,"types":[]},{"text":"impl Hash for LibCall","synthetic":false,"types":[]},{"text":"impl Hash for MemFlags","synthetic":false,"types":[]},{"text":"impl Hash for TrapCode","synthetic":false,"types":[]},{"text":"impl Hash for Type","synthetic":false,"types":[]},{"text":"impl Hash for ArgumentLoc","synthetic":false,"types":[]},{"text":"impl Hash for ValueLabel","synthetic":false,"types":[]},{"text":"impl Hash for CallConv","synthetic":false,"types":[]},{"text":"impl Hash for TargetFrontendConfig","synthetic":false,"types":[]},{"text":"impl Hash for Loop","synthetic":false,"types":[]},{"text":"impl Hash for LoweredBlock","synthetic":false,"types":[]},{"text":"impl Hash for MachLabel","synthetic":false,"types":[]},{"text":"impl Hash for Builder","synthetic":false,"types":[]},{"text":"impl Hash for Template","synthetic":false,"types":[]},{"text":"impl Hash for Descriptor","synthetic":false,"types":[]},{"text":"impl Hash for Detail","synthetic":false,"types":[]},{"text":"impl Hash for Regalloc","synthetic":false,"types":[]},{"text":"impl Hash for OptLevel","synthetic":false,"types":[]},{"text":"impl Hash for TlsModel","synthetic":false,"types":[]},{"text":"impl Hash for LibcallCallConv","synthetic":false,"types":[]}];
implementors["cranelift_codegen_meta"] = [{"text":"impl Hash for DefIndex","synthetic":false,"types":[]},{"text":"impl Hash for VarIndex","synthetic":false,"types":[]},{"text":"impl Hash for FormatStructure","synthetic":false,"types":[]},{"text":"impl Hash for OpcodeNumber","synthetic":false,"types":[]},{"text":"impl Hash for FormatPredicateKind","synthetic":false,"types":[]},{"text":"impl Hash for FormatPredicateNode","synthetic":false,"types":[]},{"text":"impl Hash for TypePredicateNode","synthetic":false,"types":[]},{"text":"impl Hash for InstructionPredicateNode","synthetic":false,"types":[]},{"text":"impl Hash for InstructionPredicate","synthetic":false,"types":[]},{"text":"impl Hash for InstructionPredicateNumber","synthetic":false,"types":[]},{"text":"impl Hash for Register","synthetic":false,"types":[]},{"text":"impl Hash for Stack","synthetic":false,"types":[]},{"text":"impl Hash for BranchRange","synthetic":false,"types":[]},{"text":"impl Hash for OperandConstraint","synthetic":false,"types":[]},{"text":"impl Hash for EncodingRecipeNumber","synthetic":false,"types":[]},{"text":"impl Hash for RegBankIndex","synthetic":false,"types":[]},{"text":"impl Hash for RegClassIndex","synthetic":false,"types":[]},{"text":"impl Hash for BoolSettingIndex","synthetic":false,"types":[]},{"text":"impl Hash for BoolSetting","synthetic":false,"types":[]},{"text":"impl Hash for SpecificSetting","synthetic":false,"types":[]},{"text":"impl Hash for Setting","synthetic":false,"types":[]},{"text":"impl Hash for PresetIndex","synthetic":false,"types":[]},{"text":"impl Hash for PresetType","synthetic":false,"types":[]},{"text":"impl Hash for Preset","synthetic":false,"types":[]},{"text":"impl Hash for PredicateNode","synthetic":false,"types":[]},{"text":"impl Hash for Constraint","synthetic":false,"types":[]},{"text":"impl Hash for ValueType","synthetic":false,"types":[]},{"text":"impl Hash for LaneType","synthetic":false,"types":[]},{"text":"impl Hash for VectorType","synthetic":false,"types":[]},{"text":"impl Hash for SpecialType","synthetic":false,"types":[]},{"text":"impl Hash for ReferenceType","synthetic":false,"types":[]},{"text":"impl Hash for TypeVar","synthetic":false,"types":[]},{"text":"impl Hash for DerivedFunc","synthetic":false,"types":[]},{"text":"impl Hash for TypeVarParent","synthetic":false,"types":[]},{"text":"impl Hash for TypeSet","synthetic":false,"types":[]},{"text":"impl Hash for TransformGroupIndex","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Hash for SettingOrPreset&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Hash for Bool","synthetic":false,"types":[]},{"text":"impl Hash for Int","synthetic":false,"types":[]},{"text":"impl Hash for Float","synthetic":false,"types":[]},{"text":"impl Hash for Flag","synthetic":false,"types":[]},{"text":"impl Hash for Reference","synthetic":false,"types":[]}];
implementors["cranelift_codegen_shared"] = [{"text":"impl Hash for IntCC","synthetic":false,"types":[]},{"text":"impl Hash for FloatCC","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;Hash + ReservedValue&gt; Hash for PackedOption&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Hash, V:&nbsp;Hash&gt; Hash for PrimaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["cranelift_module"] = [{"text":"impl Hash for FuncId","synthetic":false,"types":[]},{"text":"impl Hash for DataId","synthetic":false,"types":[]},{"text":"impl Hash for FuncOrDataId","synthetic":false,"types":[]}];
implementors["cranelift_wasm"] = [{"text":"impl Hash for WasmType","synthetic":false,"types":[]},{"text":"impl Hash for WasmFuncType","synthetic":false,"types":[]},{"text":"impl Hash for FuncIndex","synthetic":false,"types":[]},{"text":"impl Hash for DefinedFuncIndex","synthetic":false,"types":[]},{"text":"impl Hash for DefinedTableIndex","synthetic":false,"types":[]},{"text":"impl Hash for DefinedMemoryIndex","synthetic":false,"types":[]},{"text":"impl Hash for DefinedGlobalIndex","synthetic":false,"types":[]},{"text":"impl Hash for TableIndex","synthetic":false,"types":[]},{"text":"impl Hash for GlobalIndex","synthetic":false,"types":[]},{"text":"impl Hash for MemoryIndex","synthetic":false,"types":[]},{"text":"impl Hash for SignatureIndex","synthetic":false,"types":[]},{"text":"impl Hash for DataIndex","synthetic":false,"types":[]},{"text":"impl Hash for ElemIndex","synthetic":false,"types":[]},{"text":"impl Hash for TypeIndex","synthetic":false,"types":[]},{"text":"impl Hash for ModuleIndex","synthetic":false,"types":[]},{"text":"impl Hash for InstanceIndex","synthetic":false,"types":[]},{"text":"impl Hash for EntityIndex","synthetic":false,"types":[]},{"text":"impl Hash for Global","synthetic":false,"types":[]},{"text":"impl Hash for GlobalInit","synthetic":false,"types":[]},{"text":"impl Hash for Table","synthetic":false,"types":[]},{"text":"impl Hash for TableElementType","synthetic":false,"types":[]},{"text":"impl Hash for Memory","synthetic":false,"types":[]}];
implementors["lightbeam"] = [{"text":"impl Hash for Ieee32","synthetic":false,"types":[]},{"text":"impl Hash for Ieee64","synthetic":false,"types":[]},{"text":"impl Hash for NameTag","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Hash&gt; Hash for BrTarget&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl&lt;L:&nbsp;Hash&gt; Hash for BrTargetDrop&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl Hash for MemoryImmediate","synthetic":false,"types":[]}];
implementors["peepmatic"] = [{"text":"impl&lt;TOperator, '_&gt; Hash for Integer&lt;'_, TOperator&gt;","synthetic":false,"types":[]},{"text":"impl&lt;TOperator, '_&gt; Hash for Boolean&lt;'_, TOperator&gt;","synthetic":false,"types":[]},{"text":"impl Hash for Constraint","synthetic":false,"types":[]}];
implementors["peepmatic_automata"] = [{"text":"impl Hash for State","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl Hash for ConditionCode","synthetic":false,"types":[]},{"text":"impl Hash for IntegerId","synthetic":false,"types":[]},{"text":"impl Hash for Else","synthetic":false,"types":[]},{"text":"impl Hash for MatchOp","synthetic":false,"types":[]},{"text":"impl Hash for LhsId","synthetic":false,"types":[]},{"text":"impl Hash for RhsId","synthetic":false,"types":[]},{"text":"impl&lt;TOperator:&nbsp;Hash&gt; Hash for Action&lt;TOperator&gt;","synthetic":false,"types":[]},{"text":"impl Hash for BitWidth","synthetic":false,"types":[]},{"text":"impl Hash for Kind","synthetic":false,"types":[]},{"text":"impl Hash for Type","synthetic":false,"types":[]},{"text":"impl Hash for UnquoteOperator","synthetic":false,"types":[]}];
implementors["peepmatic_test"] = [{"text":"impl Hash for Instruction","synthetic":false,"types":[]}];
implementors["peepmatic_test_operator"] = [{"text":"impl Hash for TestOperator","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Hash for Ident","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Hash for Underscore","synthetic":false,"types":[]},{"text":"impl Hash for Abstract","synthetic":false,"types":[]},{"text":"impl Hash for As","synthetic":false,"types":[]},{"text":"impl Hash for Async","synthetic":false,"types":[]},{"text":"impl Hash for Auto","synthetic":false,"types":[]},{"text":"impl Hash for Await","synthetic":false,"types":[]},{"text":"impl Hash for Become","synthetic":false,"types":[]},{"text":"impl Hash for Box","synthetic":false,"types":[]},{"text":"impl Hash for Break","synthetic":false,"types":[]},{"text":"impl Hash for Const","synthetic":false,"types":[]},{"text":"impl Hash for Continue","synthetic":false,"types":[]},{"text":"impl Hash for Crate","synthetic":false,"types":[]},{"text":"impl Hash for Default","synthetic":false,"types":[]},{"text":"impl Hash for Do","synthetic":false,"types":[]},{"text":"impl Hash for Dyn","synthetic":false,"types":[]},{"text":"impl Hash for Else","synthetic":false,"types":[]},{"text":"impl Hash for Enum","synthetic":false,"types":[]},{"text":"impl Hash for Extern","synthetic":false,"types":[]},{"text":"impl Hash for Final","synthetic":false,"types":[]},{"text":"impl Hash for Fn","synthetic":false,"types":[]},{"text":"impl Hash for For","synthetic":false,"types":[]},{"text":"impl Hash for If","synthetic":false,"types":[]},{"text":"impl Hash for Impl","synthetic":false,"types":[]},{"text":"impl Hash for In","synthetic":false,"types":[]},{"text":"impl Hash for Let","synthetic":false,"types":[]},{"text":"impl Hash for Loop","synthetic":false,"types":[]},{"text":"impl Hash for Macro","synthetic":false,"types":[]},{"text":"impl Hash for Match","synthetic":false,"types":[]},{"text":"impl Hash for Mod","synthetic":false,"types":[]},{"text":"impl Hash for Move","synthetic":false,"types":[]},{"text":"impl Hash for Mut","synthetic":false,"types":[]},{"text":"impl Hash for Override","synthetic":false,"types":[]},{"text":"impl Hash for Priv","synthetic":false,"types":[]},{"text":"impl Hash for Pub","synthetic":false,"types":[]},{"text":"impl Hash for Ref","synthetic":false,"types":[]},{"text":"impl Hash for Return","synthetic":false,"types":[]},{"text":"impl Hash for SelfType","synthetic":false,"types":[]},{"text":"impl Hash for SelfValue","synthetic":false,"types":[]},{"text":"impl Hash for Static","synthetic":false,"types":[]},{"text":"impl Hash for Struct","synthetic":false,"types":[]},{"text":"impl Hash for Super","synthetic":false,"types":[]},{"text":"impl Hash for Trait","synthetic":false,"types":[]},{"text":"impl Hash for Try","synthetic":false,"types":[]},{"text":"impl Hash for Type","synthetic":false,"types":[]},{"text":"impl Hash for Typeof","synthetic":false,"types":[]},{"text":"impl Hash for Union","synthetic":false,"types":[]},{"text":"impl Hash for Unsafe","synthetic":false,"types":[]},{"text":"impl Hash for Unsized","synthetic":false,"types":[]},{"text":"impl Hash for Use","synthetic":false,"types":[]},{"text":"impl Hash for Virtual","synthetic":false,"types":[]},{"text":"impl Hash for Where","synthetic":false,"types":[]},{"text":"impl Hash for While","synthetic":false,"types":[]},{"text":"impl Hash for Yield","synthetic":false,"types":[]},{"text":"impl Hash for Add","synthetic":false,"types":[]},{"text":"impl Hash for AddEq","synthetic":false,"types":[]},{"text":"impl Hash for And","synthetic":false,"types":[]},{"text":"impl Hash for AndAnd","synthetic":false,"types":[]},{"text":"impl Hash for AndEq","synthetic":false,"types":[]},{"text":"impl Hash for At","synthetic":false,"types":[]},{"text":"impl Hash for Bang","synthetic":false,"types":[]},{"text":"impl Hash for Caret","synthetic":false,"types":[]},{"text":"impl Hash for CaretEq","synthetic":false,"types":[]},{"text":"impl Hash for Colon","synthetic":false,"types":[]},{"text":"impl Hash for Colon2","synthetic":false,"types":[]},{"text":"impl Hash for Comma","synthetic":false,"types":[]},{"text":"impl Hash for Div","synthetic":false,"types":[]},{"text":"impl Hash for DivEq","synthetic":false,"types":[]},{"text":"impl Hash for Dollar","synthetic":false,"types":[]},{"text":"impl Hash for Dot","synthetic":false,"types":[]},{"text":"impl Hash for Dot2","synthetic":false,"types":[]},{"text":"impl Hash for Dot3","synthetic":false,"types":[]},{"text":"impl Hash for DotDotEq","synthetic":false,"types":[]},{"text":"impl Hash for Eq","synthetic":false,"types":[]},{"text":"impl Hash for EqEq","synthetic":false,"types":[]},{"text":"impl Hash for Ge","synthetic":false,"types":[]},{"text":"impl Hash for Gt","synthetic":false,"types":[]},{"text":"impl Hash for Le","synthetic":false,"types":[]},{"text":"impl Hash for Lt","synthetic":false,"types":[]},{"text":"impl Hash for MulEq","synthetic":false,"types":[]},{"text":"impl Hash for Ne","synthetic":false,"types":[]},{"text":"impl Hash for Or","synthetic":false,"types":[]},{"text":"impl Hash for OrEq","synthetic":false,"types":[]},{"text":"impl Hash for OrOr","synthetic":false,"types":[]},{"text":"impl Hash for Pound","synthetic":false,"types":[]},{"text":"impl Hash for Question","synthetic":false,"types":[]},{"text":"impl Hash for RArrow","synthetic":false,"types":[]},{"text":"impl Hash for LArrow","synthetic":false,"types":[]},{"text":"impl Hash for Rem","synthetic":false,"types":[]},{"text":"impl Hash for RemEq","synthetic":false,"types":[]},{"text":"impl Hash for FatArrow","synthetic":false,"types":[]},{"text":"impl Hash for Semi","synthetic":false,"types":[]},{"text":"impl Hash for Shl","synthetic":false,"types":[]},{"text":"impl Hash for ShlEq","synthetic":false,"types":[]},{"text":"impl Hash for Shr","synthetic":false,"types":[]},{"text":"impl Hash for ShrEq","synthetic":false,"types":[]},{"text":"impl Hash for Star","synthetic":false,"types":[]},{"text":"impl Hash for Sub","synthetic":false,"types":[]},{"text":"impl Hash for SubEq","synthetic":false,"types":[]},{"text":"impl Hash for Tilde","synthetic":false,"types":[]},{"text":"impl Hash for Brace","synthetic":false,"types":[]},{"text":"impl Hash for Bracket","synthetic":false,"types":[]},{"text":"impl Hash for Paren","synthetic":false,"types":[]},{"text":"impl Hash for Group","synthetic":false,"types":[]},{"text":"impl Hash for Member","synthetic":false,"types":[]},{"text":"impl Hash for Index","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Hash for ImplGenerics&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Hash for TypeGenerics&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Hash for Turbofish&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Hash for Lifetime","synthetic":false,"types":[]},{"text":"impl Hash for LitStr","synthetic":false,"types":[]},{"text":"impl Hash for LitByteStr","synthetic":false,"types":[]},{"text":"impl Hash for LitByte","synthetic":false,"types":[]},{"text":"impl Hash for LitChar","synthetic":false,"types":[]},{"text":"impl Hash for LitInt","synthetic":false,"types":[]},{"text":"impl Hash for LitFloat","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; Hash for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Hash,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Hash for Abi","synthetic":false,"types":[]},{"text":"impl Hash for AngleBracketedGenericArguments","synthetic":false,"types":[]},{"text":"impl Hash for Arm","synthetic":false,"types":[]},{"text":"impl Hash for AttrStyle","synthetic":false,"types":[]},{"text":"impl Hash for Attribute","synthetic":false,"types":[]},{"text":"impl Hash for BareFnArg","synthetic":false,"types":[]},{"text":"impl Hash for BinOp","synthetic":false,"types":[]},{"text":"impl Hash for Binding","synthetic":false,"types":[]},{"text":"impl Hash for Block","synthetic":false,"types":[]},{"text":"impl Hash for BoundLifetimes","synthetic":false,"types":[]},{"text":"impl Hash for ConstParam","synthetic":false,"types":[]},{"text":"impl Hash for Constraint","synthetic":false,"types":[]},{"text":"impl Hash for Data","synthetic":false,"types":[]},{"text":"impl Hash for DataEnum","synthetic":false,"types":[]},{"text":"impl Hash for DataStruct","synthetic":false,"types":[]},{"text":"impl Hash for DataUnion","synthetic":false,"types":[]},{"text":"impl Hash for DeriveInput","synthetic":false,"types":[]},{"text":"impl Hash for Expr","synthetic":false,"types":[]},{"text":"impl Hash for ExprArray","synthetic":false,"types":[]},{"text":"impl Hash for ExprAssign","synthetic":false,"types":[]},{"text":"impl Hash for ExprAssignOp","synthetic":false,"types":[]},{"text":"impl Hash for ExprAsync","synthetic":false,"types":[]},{"text":"impl Hash for ExprAwait","synthetic":false,"types":[]},{"text":"impl Hash for ExprBinary","synthetic":false,"types":[]},{"text":"impl Hash for ExprBlock","synthetic":false,"types":[]},{"text":"impl Hash for ExprBox","synthetic":false,"types":[]},{"text":"impl Hash for ExprBreak","synthetic":false,"types":[]},{"text":"impl Hash for ExprCall","synthetic":false,"types":[]},{"text":"impl Hash for ExprCast","synthetic":false,"types":[]},{"text":"impl Hash for ExprClosure","synthetic":false,"types":[]},{"text":"impl Hash for ExprContinue","synthetic":false,"types":[]},{"text":"impl Hash for ExprField","synthetic":false,"types":[]},{"text":"impl Hash for ExprForLoop","synthetic":false,"types":[]},{"text":"impl Hash for ExprGroup","synthetic":false,"types":[]},{"text":"impl Hash for ExprIf","synthetic":false,"types":[]},{"text":"impl Hash for ExprIndex","synthetic":false,"types":[]},{"text":"impl Hash for ExprLet","synthetic":false,"types":[]},{"text":"impl Hash for ExprLit","synthetic":false,"types":[]},{"text":"impl Hash for ExprLoop","synthetic":false,"types":[]},{"text":"impl Hash for ExprMacro","synthetic":false,"types":[]},{"text":"impl Hash for ExprMatch","synthetic":false,"types":[]},{"text":"impl Hash for ExprMethodCall","synthetic":false,"types":[]},{"text":"impl Hash for ExprParen","synthetic":false,"types":[]},{"text":"impl Hash for ExprPath","synthetic":false,"types":[]},{"text":"impl Hash for ExprRange","synthetic":false,"types":[]},{"text":"impl Hash for ExprReference","synthetic":false,"types":[]},{"text":"impl Hash for ExprRepeat","synthetic":false,"types":[]},{"text":"impl Hash for ExprReturn","synthetic":false,"types":[]},{"text":"impl Hash for ExprStruct","synthetic":false,"types":[]},{"text":"impl Hash for ExprTry","synthetic":false,"types":[]},{"text":"impl Hash for ExprTryBlock","synthetic":false,"types":[]},{"text":"impl Hash for ExprTuple","synthetic":false,"types":[]},{"text":"impl Hash for ExprType","synthetic":false,"types":[]},{"text":"impl Hash for ExprUnary","synthetic":false,"types":[]},{"text":"impl Hash for ExprUnsafe","synthetic":false,"types":[]},{"text":"impl Hash for ExprWhile","synthetic":false,"types":[]},{"text":"impl Hash for ExprYield","synthetic":false,"types":[]},{"text":"impl Hash for Field","synthetic":false,"types":[]},{"text":"impl Hash for FieldPat","synthetic":false,"types":[]},{"text":"impl Hash for FieldValue","synthetic":false,"types":[]},{"text":"impl Hash for Fields","synthetic":false,"types":[]},{"text":"impl Hash for FieldsNamed","synthetic":false,"types":[]},{"text":"impl Hash for FieldsUnnamed","synthetic":false,"types":[]},{"text":"impl Hash for File","synthetic":false,"types":[]},{"text":"impl Hash for FnArg","synthetic":false,"types":[]},{"text":"impl Hash for ForeignItem","synthetic":false,"types":[]},{"text":"impl Hash for ForeignItemFn","synthetic":false,"types":[]},{"text":"impl Hash for ForeignItemMacro","synthetic":false,"types":[]},{"text":"impl Hash for ForeignItemStatic","synthetic":false,"types":[]},{"text":"impl Hash for ForeignItemType","synthetic":false,"types":[]},{"text":"impl Hash for GenericArgument","synthetic":false,"types":[]},{"text":"impl Hash for GenericMethodArgument","synthetic":false,"types":[]},{"text":"impl Hash for GenericParam","synthetic":false,"types":[]},{"text":"impl Hash for Generics","synthetic":false,"types":[]},{"text":"impl Hash for ImplItem","synthetic":false,"types":[]},{"text":"impl Hash for ImplItemConst","synthetic":false,"types":[]},{"text":"impl Hash for ImplItemMacro","synthetic":false,"types":[]},{"text":"impl Hash for ImplItemMethod","synthetic":false,"types":[]},{"text":"impl Hash for ImplItemType","synthetic":false,"types":[]},{"text":"impl Hash for Item","synthetic":false,"types":[]},{"text":"impl Hash for ItemConst","synthetic":false,"types":[]},{"text":"impl Hash for ItemEnum","synthetic":false,"types":[]},{"text":"impl Hash for ItemExternCrate","synthetic":false,"types":[]},{"text":"impl Hash for ItemFn","synthetic":false,"types":[]},{"text":"impl Hash for ItemForeignMod","synthetic":false,"types":[]},{"text":"impl Hash for ItemImpl","synthetic":false,"types":[]},{"text":"impl Hash for ItemMacro","synthetic":false,"types":[]},{"text":"impl Hash for ItemMacro2","synthetic":false,"types":[]},{"text":"impl Hash for ItemMod","synthetic":false,"types":[]},{"text":"impl Hash for ItemStatic","synthetic":false,"types":[]},{"text":"impl Hash for ItemStruct","synthetic":false,"types":[]},{"text":"impl Hash for ItemTrait","synthetic":false,"types":[]},{"text":"impl Hash for ItemTraitAlias","synthetic":false,"types":[]},{"text":"impl Hash for ItemType","synthetic":false,"types":[]},{"text":"impl Hash for ItemUnion","synthetic":false,"types":[]},{"text":"impl Hash for ItemUse","synthetic":false,"types":[]},{"text":"impl Hash for Label","synthetic":false,"types":[]},{"text":"impl Hash for LifetimeDef","synthetic":false,"types":[]},{"text":"impl Hash for Lit","synthetic":false,"types":[]},{"text":"impl Hash for LitBool","synthetic":false,"types":[]},{"text":"impl Hash for Local","synthetic":false,"types":[]},{"text":"impl Hash for Macro","synthetic":false,"types":[]},{"text":"impl Hash for MacroDelimiter","synthetic":false,"types":[]},{"text":"impl Hash for Meta","synthetic":false,"types":[]},{"text":"impl Hash for MetaList","synthetic":false,"types":[]},{"text":"impl Hash for MetaNameValue","synthetic":false,"types":[]},{"text":"impl Hash for MethodTurbofish","synthetic":false,"types":[]},{"text":"impl Hash for NestedMeta","synthetic":false,"types":[]},{"text":"impl Hash for ParenthesizedGenericArguments","synthetic":false,"types":[]},{"text":"impl Hash for Pat","synthetic":false,"types":[]},{"text":"impl Hash for PatBox","synthetic":false,"types":[]},{"text":"impl Hash for PatIdent","synthetic":false,"types":[]},{"text":"impl Hash for PatLit","synthetic":false,"types":[]},{"text":"impl Hash for PatMacro","synthetic":false,"types":[]},{"text":"impl Hash for PatOr","synthetic":false,"types":[]},{"text":"impl Hash for PatPath","synthetic":false,"types":[]},{"text":"impl Hash for PatRange","synthetic":false,"types":[]},{"text":"impl Hash for PatReference","synthetic":false,"types":[]},{"text":"impl Hash for PatRest","synthetic":false,"types":[]},{"text":"impl Hash for PatSlice","synthetic":false,"types":[]},{"text":"impl Hash for PatStruct","synthetic":false,"types":[]},{"text":"impl Hash for PatTuple","synthetic":false,"types":[]},{"text":"impl Hash for PatTupleStruct","synthetic":false,"types":[]},{"text":"impl Hash for PatType","synthetic":false,"types":[]},{"text":"impl Hash for PatWild","synthetic":false,"types":[]},{"text":"impl Hash for Path","synthetic":false,"types":[]},{"text":"impl Hash for PathArguments","synthetic":false,"types":[]},{"text":"impl Hash for PathSegment","synthetic":false,"types":[]},{"text":"impl Hash for PredicateEq","synthetic":false,"types":[]},{"text":"impl Hash for PredicateLifetime","synthetic":false,"types":[]},{"text":"impl Hash for PredicateType","synthetic":false,"types":[]},{"text":"impl Hash for QSelf","synthetic":false,"types":[]},{"text":"impl Hash for RangeLimits","synthetic":false,"types":[]},{"text":"impl Hash for Receiver","synthetic":false,"types":[]},{"text":"impl Hash for ReturnType","synthetic":false,"types":[]},{"text":"impl Hash for Signature","synthetic":false,"types":[]},{"text":"impl Hash for Stmt","synthetic":false,"types":[]},{"text":"impl Hash for TraitBound","synthetic":false,"types":[]},{"text":"impl Hash for TraitBoundModifier","synthetic":false,"types":[]},{"text":"impl Hash for TraitItem","synthetic":false,"types":[]},{"text":"impl Hash for TraitItemConst","synthetic":false,"types":[]},{"text":"impl Hash for TraitItemMacro","synthetic":false,"types":[]},{"text":"impl Hash for TraitItemMethod","synthetic":false,"types":[]},{"text":"impl Hash for TraitItemType","synthetic":false,"types":[]},{"text":"impl Hash for Type","synthetic":false,"types":[]},{"text":"impl Hash for TypeArray","synthetic":false,"types":[]},{"text":"impl Hash for TypeBareFn","synthetic":false,"types":[]},{"text":"impl Hash for TypeGroup","synthetic":false,"types":[]},{"text":"impl Hash for TypeImplTrait","synthetic":false,"types":[]},{"text":"impl Hash for TypeInfer","synthetic":false,"types":[]},{"text":"impl Hash for TypeMacro","synthetic":false,"types":[]},{"text":"impl Hash for TypeNever","synthetic":false,"types":[]},{"text":"impl Hash for TypeParam","synthetic":false,"types":[]},{"text":"impl Hash for TypeParamBound","synthetic":false,"types":[]},{"text":"impl Hash for TypeParen","synthetic":false,"types":[]},{"text":"impl Hash for TypePath","synthetic":false,"types":[]},{"text":"impl Hash for TypePtr","synthetic":false,"types":[]},{"text":"impl Hash for TypeReference","synthetic":false,"types":[]},{"text":"impl Hash for TypeSlice","synthetic":false,"types":[]},{"text":"impl Hash for TypeTraitObject","synthetic":false,"types":[]},{"text":"impl Hash for TypeTuple","synthetic":false,"types":[]},{"text":"impl Hash for UnOp","synthetic":false,"types":[]},{"text":"impl Hash for UseGlob","synthetic":false,"types":[]},{"text":"impl Hash for UseGroup","synthetic":false,"types":[]},{"text":"impl Hash for UseName","synthetic":false,"types":[]},{"text":"impl Hash for UsePath","synthetic":false,"types":[]},{"text":"impl Hash for UseRename","synthetic":false,"types":[]},{"text":"impl Hash for UseTree","synthetic":false,"types":[]},{"text":"impl Hash for Variadic","synthetic":false,"types":[]},{"text":"impl Hash for Variant","synthetic":false,"types":[]},{"text":"impl Hash for VisCrate","synthetic":false,"types":[]},{"text":"impl Hash for VisPublic","synthetic":false,"types":[]},{"text":"impl Hash for VisRestricted","synthetic":false,"types":[]},{"text":"impl Hash for Visibility","synthetic":false,"types":[]},{"text":"impl Hash for WhereClause","synthetic":false,"types":[]},{"text":"impl Hash for WherePredicate","synthetic":false,"types":[]}];
implementors["wasi_common"] = [{"text":"impl Hash for FileType","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_dirent_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_fdstat_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_filestat_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_event_fd_readwrite_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_event_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_subscription_clock_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_subscription_fd_readwrite_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_iovec_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_ciovec_t","synthetic":false,"types":[]},{"text":"impl Hash for __wasi_prestat_dir_t","synthetic":false,"types":[]},{"text":"impl Hash for Clockid","synthetic":false,"types":[]},{"text":"impl Hash for Errno","synthetic":false,"types":[]},{"text":"impl Hash for Rights","synthetic":false,"types":[]},{"text":"impl Hash for Fd","synthetic":false,"types":[]},{"text":"impl Hash for Whence","synthetic":false,"types":[]},{"text":"impl Hash for Filetype","synthetic":false,"types":[]},{"text":"impl Hash for Advice","synthetic":false,"types":[]},{"text":"impl Hash for Fdflags","synthetic":false,"types":[]},{"text":"impl Hash for Fstflags","synthetic":false,"types":[]},{"text":"impl Hash for Lookupflags","synthetic":false,"types":[]},{"text":"impl Hash for Oflags","synthetic":false,"types":[]},{"text":"impl Hash for Eventtype","synthetic":false,"types":[]},{"text":"impl Hash for Eventrwflags","synthetic":false,"types":[]},{"text":"impl Hash for Subclockflags","synthetic":false,"types":[]},{"text":"impl Hash for Signal","synthetic":false,"types":[]},{"text":"impl Hash for Riflags","synthetic":false,"types":[]},{"text":"impl Hash for Roflags","synthetic":false,"types":[]},{"text":"impl Hash for Sdflags","synthetic":false,"types":[]},{"text":"impl Hash for Preopentype","synthetic":false,"types":[]}];
implementors["wasmtime"] = [{"text":"impl Hash for TrapCode","synthetic":false,"types":[]},{"text":"impl Hash for Mutability","synthetic":false,"types":[]},{"text":"impl Hash for Limits","synthetic":false,"types":[]},{"text":"impl Hash for ValType","synthetic":false,"types":[]},{"text":"impl Hash for FuncType","synthetic":false,"types":[]},{"text":"impl Hash for GlobalType","synthetic":false,"types":[]},{"text":"impl Hash for TableType","synthetic":false,"types":[]},{"text":"impl Hash for MemoryType","synthetic":false,"types":[]}];
implementors["wasmtime_environ"] = [{"text":"impl Hash for TableElements","synthetic":false,"types":[]},{"text":"impl Hash for MemoryStyle","synthetic":false,"types":[]},{"text":"impl Hash for MemoryPlan","synthetic":false,"types":[]},{"text":"impl Hash for TableStyle","synthetic":false,"types":[]},{"text":"impl Hash for TablePlan","synthetic":false,"types":[]},{"text":"impl Hash for Tunables","synthetic":false,"types":[]}];
implementors["wasmtime_fuzzing"] = [{"text":"impl Hash for DifferentialConfig","synthetic":false,"types":[]}];
implementors["wasmtime_jit"] = [{"text":"impl Hash for CompilationStrategy","synthetic":false,"types":[]},{"text":"impl Hash for Compiler","synthetic":false,"types":[]}];
implementors["wasmtime_runtime"] = [{"text":"impl Hash for InstanceHandle","synthetic":false,"types":[]},{"text":"impl Hash for VMSharedSignatureIndex","synthetic":false,"types":[]}];
implementors["wiggle"] = [{"text":"impl Hash for BorrowHandle","synthetic":false,"types":[]}];
implementors["witx"] = [{"text":"impl Hash for Id","synthetic":false,"types":[]},{"text":"impl Hash for Document","synthetic":false,"types":[]},{"text":"impl Hash for Definition","synthetic":false,"types":[]},{"text":"impl Hash for TypeRef","synthetic":false,"types":[]},{"text":"impl Hash for NamedType","synthetic":false,"types":[]},{"text":"impl Hash for Type","synthetic":false,"types":[]},{"text":"impl Hash for BuiltinType","synthetic":false,"types":[]},{"text":"impl Hash for IntRepr","synthetic":false,"types":[]},{"text":"impl Hash for EnumDatatype","synthetic":false,"types":[]},{"text":"impl Hash for EnumVariant","synthetic":false,"types":[]},{"text":"impl Hash for IntDatatype","synthetic":false,"types":[]},{"text":"impl Hash for IntConst","synthetic":false,"types":[]},{"text":"impl Hash for FlagsDatatype","synthetic":false,"types":[]},{"text":"impl Hash for FlagsMember","synthetic":false,"types":[]},{"text":"impl Hash for StructDatatype","synthetic":false,"types":[]},{"text":"impl Hash for StructMember","synthetic":false,"types":[]},{"text":"impl Hash for UnionDatatype","synthetic":false,"types":[]},{"text":"impl Hash for UnionVariant","synthetic":false,"types":[]},{"text":"impl Hash for HandleDatatype","synthetic":false,"types":[]},{"text":"impl Hash for Module","synthetic":false,"types":[]},{"text":"impl Hash for ModuleDefinition","synthetic":false,"types":[]},{"text":"impl Hash for ModuleImport","synthetic":false,"types":[]},{"text":"impl Hash for ModuleImportVariant","synthetic":false,"types":[]},{"text":"impl Hash for InterfaceFunc","synthetic":false,"types":[]},{"text":"impl Hash for InterfaceFuncParam","synthetic":false,"types":[]},{"text":"impl Hash for InterfaceFuncParamPosition","synthetic":false,"types":[]},{"text":"impl Hash for SizeAlign","synthetic":false,"types":[]},{"text":"impl Hash for Polyfill","synthetic":false,"types":[]},{"text":"impl Hash for ModulePolyfill","synthetic":false,"types":[]},{"text":"impl Hash for FuncPolyfill","synthetic":false,"types":[]},{"text":"impl Hash for ParamPolyfill","synthetic":false,"types":[]},{"text":"impl Hash for ParamUnknown","synthetic":false,"types":[]},{"text":"impl Hash for TypePolyfill","synthetic":false,"types":[]}];
implementors["yanix"] = [{"text":"impl Hash for Dir","synthetic":false,"types":[]},{"text":"impl Hash for FdFlags","synthetic":false,"types":[]},{"text":"impl Hash for AtFlags","synthetic":false,"types":[]},{"text":"impl Hash for Mode","synthetic":false,"types":[]},{"text":"impl Hash for OFlags","synthetic":false,"types":[]},{"text":"impl Hash for PollFlags","synthetic":false,"types":[]},{"text":"impl Hash for PollFd","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
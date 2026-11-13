// memory_check.js


// In V8, strings can also be converted or wrapped to objects for inspection
// let obj1 = { name: "username" };
// let obj2 = obj1;

// console.log("=== V8 Internal Debug Print for obj1 ===");
// %DebugPrint(obj1); output - 0x3a7a42ee4901:

// console.log("\n=== V8 Internal Debug Print for obj2 ===");
// %DebugPrint(obj2); output - 0x3a7a42ee4901:


// let username = "chandan";
// let anotherUsername = "chandan";

// console.log("\n=== Direct Debug Print for Strings ===");
// %DebugPrint(username);
// %DebugPrint(anotherUsername);

/*
This is one of the **best and most famous interview-level deep dives into V8 and JavaScript memory!**

You did:
```javascript
let username = "chandan";
let anotherUsername = username;
```

And both printed the exact same heap address:
```text
0x18c067c55ad1: [String] in OldSpace: #chandan
0x18c067c55ad1: [String] in OldSpace: #chandan
```

You are asking: *"Shouldn't primitive values be copied to a new memory place?"*

The answer lies in two V8 engine optimization secrets: **String Immutability + String Interning**, and **Copy-on-Write**.

---

### 1. Strings are Primitives, but they are Heap Objects (not 8-byte numbers)
In C or low-level architecture:
- A number like `42` takes 4 or 8 bytes and easily fits directly on the CPU stack.
- But a string like `"chandan"` can be 7 bytes, 10,000 bytes, or 10 MB!
Because strings can be arbitrarily long, **all JavaScript engines allocate the string characters in the Heap**, while the variable on the stack merely holds a pointer/reference to that heap string.

---

### 2. The Golden Rule: Strings are Immutable (Cannot Be Changed)
In JavaScript, primitives are **immutable**. You cannot do:
```javascript
let str = "chandan";
str[0] = "k"; // Silently fails or throws error in strict mode
```
Since `"chandan"` can **never be altered in-place**, V8 asks a brilliant optimization question:

> *"If `"chandan"` can NEVER change, why should I waste RAM allocating another identical `"chandan"` in memory?"*

Answer: It shouldn't! 

When you do:
```javascript
let username = "chandan";
let anotherUsername = username;
```
V8 simply copies the **pointer** to the exact same string object in heap (`0x18c067c55ad1`). It is 100% safe to do this because neither `username` nor `anotherUsername` can mutate that memory block!

---

### 3. Look at your V8 Output: `INTERNALIZED_ONE_BYTE_STRING_TYPE`
Look at line 4 in your terminal output:
```text
- type: INTERNALIZED_ONE_BYTE_STRING_TYPE
```
This is called **String Interning (String Pool)**:
- Whenever V8 sees string literals in your source code, it keeps a single unique copy in a hash table called the **String Table / String Pool**.
- Even if you wrote:
  ```javascript
  let username = "chandan";
  let anotherUsername = "chandan"; // written independently!
  ```
  Both would **still** point to `0x18c067c55ad1` because V8 reuses the interned string!

---

### 4. When does it actually get a new memory address? (Copy-on-Write / Re-assignment)

What happens if you now change `anotherUsername`?

```javascript
let username = "chandan";
let anotherUsername = username;

// Now reassign anotherUsername:
anotherUsername = anotherUsername + "!"; // or "soumya"

%DebugPrint(username);
%DebugPrint(anotherUsername);
```

Because strings are immutable, V8 cannot alter `"chandan"`. Instead, it allocates a **brand new memory space** for `"chandan!"` and updates `anotherUsername`'s pointer to the new address. 
`username` remains untouched at `0x18c067c55ad1`.

---

### 5. Why do tutorials say "Primitives are copied by value"?

When textbooks say:
> *"Primitives are copied by value, Objects are copied by reference."*

They are describing the **semantic behavior of the JavaScript language**, not the C++ implementation under the hood of the V8 engine:
* **Behaviorally (JS level):** `username` and `anotherUsername` act completely independently. Changing one never affects the other.
* **Physically (V8 engine level):** V8 optimizes memory by sharing the pointer to the immutable string until a modification requires creating a new one.

This gives you the **safety of "pass-by-value"** with the **blazing speed and low RAM footprint of "pass-by-reference"**!
*/

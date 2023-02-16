/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

LeetCode Link: https://leetcode.com/problems/min-stack/submissions/899191555/
*/

class MinStack {
    st = Array();
    mn = Array();

    push(x) {
        if ((this.st.length == 0) || x <= this.mn[this.mn.length - 1]) {
            this.mn.push(x);
        }
        this.st.push(x);
    }

    pop() {
        if (this.st[this.st.length - 1] == (this.mn[this.mn.length - 1])) {
            this.mn.pop();
        }
        this.st.pop();
    }

    top() {
        return this.st[this.st.length - 1];
    }

    getMin() {
        return this.mn[this.mn.length - 1];
    }
}

class Tests {
    static main(args) {
        var minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        var param1 = minStack.getMin();
        minStack.pop();
        var param2 = minStack.top();
        var param3 = minStack.getMin();
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }
}

Tests.main([]);

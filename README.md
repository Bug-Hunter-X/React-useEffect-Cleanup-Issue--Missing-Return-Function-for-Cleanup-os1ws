# React useEffect Cleanup Issue

This repository demonstrates a common React bug involving the `useEffect` hook: neglecting to include a cleanup function to properly handle side effects.  The bug occurs when an effect that registers event listeners, sets up subscriptions, or performs other tasks that require cleanup after component unmount is missing its cleanup function. This leads to memory leaks, unexpected behavior, and potential performance issues.

## Bug Description

The `bug.js` file showcases a `useEffect` hook that updates a counter and logs changes. However, it omits the necessary cleanup function in the `useEffect`'s return statement. Without this cleanup, if the component unmounts, the effect won't properly clean up its side-effects.

## Solution

The `bugSolution.js` demonstrates the correct way to use `useEffect` with a return function for cleanup. The return function will run before the component unmounts and this should handle any necessary cleanup actions such as removing event listeners or canceling subscriptions to prevent memory leaks.
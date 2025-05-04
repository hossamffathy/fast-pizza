function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
     
        <div className="flex h-32 items-center justify-center space-x-2">
          <div className="h-6 w-2 animate-bounce rounded bg-blue-500 [animation-delay:-0.3s]"></div>
          <div className="h-6 w-2 animate-bounce rounded bg-blue-500 [animation-delay:-0.15s]"></div>
          <div className="h-6 w-2 animate-bounce rounded bg-blue-500"></div>
       
      </div>
    </div>
  );
}

export default Loader;

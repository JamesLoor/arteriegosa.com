const ArrowLeft = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7277 27.4829L2.516 16.2483C1.828 15.5589 1.828 14.4411 2.516 13.7517L13.7277 2.51706C14.4157 1.82765 15.5312 1.82765 16.2192 2.51706C16.9072 3.20647 16.9072 4.32423 16.2192 5.01365L8.01497 13.2346L27.2383 13.2346C28.2112 13.2346 29 14.025 29 15C29 15.975 28.2112 16.7654 27.2383 16.7654L8.01497 16.7654L16.2192 24.9864C16.9072 25.6758 16.9072 26.7935 16.2192 27.4829C15.5312 28.1724 14.4157 28.1724 13.7277 27.4829Z"
        fill="#25723E"
      />
    </svg>
  )
}

export default ArrowLeft
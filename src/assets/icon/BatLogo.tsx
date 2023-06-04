import * as React from "react"
import { SVGProps } from "react"
const BatLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#f8d923"
      fillRule="evenodd"
      d="M296.45 33.923 296.399 57h10.754c12.511 0 15.269-.947 17.927-6.157 2.617-5.129 2.468-10.756-.394-14.974-2.272-3.348-2.281-3.466-.506-6.39 2.848-4.688 2.392-10.807-1.096-14.713l-2.915-3.266-11.835-.327-11.834-.327-.05 23.077m45.981-15.272C337.029 30.4 327 54.594 327 55.876c0 .62 1.586 1.124 3.536 1.124 3.237 0 3.697-.379 5.464-4.5 1.865-4.352 2.07-4.498 6.214-4.442 2.358.031 6.066.373 8.24.759 3.68.653 4.031 1.013 5.042 5.167.925 3.797 1.57 4.603 4.313 5.39 1.774.509 3.497.653 3.83.32.333-.333-1.961-11.2-5.097-24.149C353.67 15.424 352.573 12 351.002 12c-1.011 0-2.541-.27-3.4-.599-1.186-.455-2.431 1.291-5.171 7.25m-87.681-3.935c-1.512.229-2.75.548-2.75.707 0 .16-2.025 10.471-4.5 22.913-2.475 12.441-4.5 23.235-4.5 23.985 0 1.016.95 1.21 3.725.759 3.49-.568 3.771-.883 4.478-5.021.414-2.429 1.111-4.773 1.547-5.209 1.346-1.346 14.538-2.856 15.799-1.809.628.521 1.913 2.657 2.855 4.746 1.574 3.49 1.991 3.765 5.154 3.396 1.893-.221 3.442-.859 3.442-1.417 0-1.834-20.85-43.77-21.685-43.616-.448.082-2.053.337-3.565.566m116.251 1.782c-.551 1.448-1.001 3-1.001 3.45 0 1.013 3.584 2.02 7.25 2.038 2.183.011 2.749.478 2.743 2.264-.006 2.155-2.552 17.301-5.125 30.492-.67 3.433-1.027 6.427-.793 6.654.234.227 1.991.569 3.905.759l3.48.345 1.179-8.5c1.701-12.261 4.562-27.707 5.375-29.023.519-.84 1.773-.842 4.866-.009 5.003 1.347 6.12.814 6.12-2.92 0-2.999-1.457-4.048-5.624-4.048-2.303 0-15.742-2.479-19.625-3.62-1.223-.36-2.05.277-2.75 2.118M304 22.955v5.954l3.543.665c2.188.41 4.961.127 7.25-.74 3.114-1.18 3.758-1.934 4.027-4.713.502-5.177-1.948-7.121-8.975-7.121H304v5.955m-91-1.198c-2.344 1.258-4.434 3.672-6.329 7.311-2.55 4.898-2.784 6.169-2.38 12.932.538 8.996 3.029 15.144 8.151 20.117 7.505 7.286 16.717 7.184 23.808-.263 4.403-4.624 4.571-5.734 1.328-8.781l-2.422-2.275-1.534 2.966c-.844 1.632-3.14 3.729-5.104 4.66-7.882 3.741-15.769-3.301-17.196-15.355-.769-6.492 1.1-11.746 5.031-14.143 4.019-2.45 6.327-2.419 10.531.144 3.643 2.221 4.519 1.872 5.471-2.18.953-4.057-2.202-6.23-9.662-6.656-4.658-.267-7.06.111-9.693 1.523m196.5 2.133c-5.226 2.412-7.781 5.304-11.143 12.613-5.864 12.748-2.669 27.182 6.989 31.567 5.622 2.553 10.315 2.386 15.449-.55l4.295-2.455-2.154 3.025c-2.449 3.439-2.524 3.246 1.831 4.715 3.151 1.064 3.352.966 5.709-2.767 1.344-2.129 2.799-4.08 3.233-4.338.435-.257 4.166.718 8.291 2.166l7.5 2.634v4.97c0 4.298.338 5.142 2.5 6.236 5.092 2.576 5 3.005 5-23.231V33.95l-2.651-1.008c-1.459-.554-2.984-.88-3.389-.725-.405.156-5.304 6.133-10.885 13.283a8579.334 8579.334 0 0 1-12.512 16l-2.364 3-1.075-2.75c-1.222-3.126-1.656-3.232-5.124-1.25-2.955 1.689-8.349 1.919-11.055.47-5.325-2.849-6.557-13.965-2.511-22.655 2.502-5.376 6.315-8.318 10.766-8.311 3.15.005 8.479 3.409 9.278 5.927.89 2.804 2.942 2.603 4.967-.487 1.574-2.403 1.566-2.741-.148-5.676-2.166-3.707-9.365-7.777-13.704-7.746-1.701.012-4.893.853-7.093 1.868m-64.39 5.367c-1.725 3.716-3.243 7.766-3.373 9-.218 2.063.226 2.267 5.545 2.544 5.594.291 5.763.226 5.203-2-.318-1.266-1.402-5.451-2.409-9.301l-1.831-7-3.135 6.757m-152.86-2.561c-2.849.561-2.827 1.897.2 12.347 1.347 4.651 3.581 13.803 4.964 20.338 1.383 6.534 2.71 12.076 2.948 12.314.239.239 2.068.127 4.066-.247 2.735-.514 3.511-1.085 3.141-2.315-2.297-7.637-5.314-19.696-7.538-30.132-2.753-12.914-2.968-13.254-7.781-12.305m62.897 6.247c-1.823 11.038-1.817 11.059 3.103 11.042 7.466-.027 7.724-.809 3.275-9.933-2.159-4.429-4.219-8.052-4.579-8.052-.359 0-1.169 3.124-1.799 6.943m-92.889 3.686-3.241 1.37 2.608 6.75c1.434 3.713 4.753 13.186 7.375 21.051 2.622 7.865 4.97 14.504 5.219 14.752.248.248 4.238-.849 8.866-2.439 4.628-1.59 9.872-3.201 11.654-3.579 4.17-.886 4.657-1.804 3.24-6.099-.804-2.436-1.522-3.247-2.322-2.624-2.142 1.67-15.591 6.348-16.549 5.756-.521-.323-3.515-8.345-6.653-17.827-3.138-9.482-5.986-17.519-6.33-17.86-.344-.341-2.084-.004-3.867.749m141.198.625c-.313.816-.432 3.906-.263 6.865l.307 5.381 6.593.292c7.402.328 8.667-.463 9.527-5.953.844-5.389-1.231-7.156-8.986-7.65-5.199-.331-6.73-.104-7.178 1.065m169.029 11.777c-3.483 6.916-3.551 7.286-4.16 22.755-.669 16.984-.561 17.413 4.681 18.635 2.116.493 4.294-1.049 14.361-10.17 10.733-9.723 12.143-11.406 14.75-17.6 1.586-3.767 2.883-7.2 2.883-7.629 0-.936-5.869-3.486-6.522-2.833-.252.251-1.733 3.568-3.291 7.37-2.466 6.017-3.926 7.887-11.26 14.423l-8.427 7.51-.288-9.926c-.285-9.804-.239-10.029 3.773-18.39 2.233-4.655 3.938-8.563 3.788-8.684-1.022-.827-4.827-2.492-5.695-2.492-.579 0-2.646 3.164-4.593 7.031m-27.9 1.227c-3.072 4.081-5.585 7.711-5.585 8.068 0 .882 6.827 3.674 8.983 3.674 1.489 0 1.817-1.335 2.276-9.25.296-5.087.396-9.399.224-9.582-.172-.182-2.826 3.008-5.898 7.09m-310.034-2.244c-4.922 2.191-9.357 4.392-9.855 4.89-.542.542 1.302 5.067 4.585 11.251 3.02 5.69 7.391 14.733 9.714 20.095 2.323 5.362 4.592 9.75 5.043 9.75.452 0 5.088-1.981 10.304-4.401 11.342-5.265 13.126-7.374 12.423-14.69-.554-5.772-3.029-9.74-7.425-11.905-2.791-1.374-3.001-1.831-2.578-5.585.573-5.086-1.706-9.822-5.729-11.902-4.334-2.241-6.613-1.896-16.482 2.497m2.949 5.156c-2.2 1.144-4.143 2.205-4.317 2.356-.927.804 5.07 10.474 6.496 10.474 2.701 0 10.312-4.951 10.439-6.792.21-3.025-.264-4.67-1.863-6.458-2.054-2.297-5.817-2.15-10.755.42m-22.75 4.437c-1.513.801-2.75 1.843-2.75 2.316 0 .472 3.825 7.521 8.5 15.665 4.675 8.143 8.5 15.517 8.5 16.386 0 2.703-2.681 5.578-7.029 7.539-6.403 2.887-7.966 1.483-17.263-15.513-4.362-7.975-8.092-14.673-8.288-14.885-.61-.659-6.42 2.078-6.42 3.025 0 .903 10.963 19.906 17.027 29.513 4.928 7.81 8.271 8.823 16.473 4.992 10.25-4.786 14.454-10.224 12.495-16.161-.991-3.003-16.467-32.161-17.865-33.659-.347-.371-1.867-.019-3.38.782m389.852 11.074c-3.017 5.95-7.945 14.866-10.952 19.813-3.007 4.946-5.249 9.346-4.983 9.777.266.43 3.938 2.552 8.159 4.714 4.221 2.163 9.094 4.868 10.829 6.012l3.155 2.079 2.204-3.096c1.212-1.702 2.043-3.185 1.845-3.294-.197-.11-3.847-1.88-8.109-3.934-4.699-2.265-7.75-4.342-7.75-5.277 0-.848 1.147-3.804 2.548-6.569l2.548-5.028 7.678 4.141 7.677 4.142 1.775-2.191c.976-1.206 1.774-2.586 1.774-3.068 0-.482-3.117-2.446-6.926-4.365-3.809-1.918-7.206-3.942-7.55-4.498C507.648 76.621 512.882 68 514.62 68c.786 0 4.404 1.879 8.04 4.175 6.301 3.98 6.675 4.088 7.975 2.309 2.608-3.567 1.5-4.89-8.776-10.484-5.557-3.025-10.48-5.644-10.939-5.819-.459-.175-3.302 4.55-6.318 10.5M287.5 64.137c-55.734 4.804-99.553 15.56-136 33.381-43.003 21.027-69.339 46.444-79.764 76.982-3.902 11.432-4.914 28.796-2.323 39.853 4.911 20.957 17.312 40.418 36.617 57.468 29.168 25.76 70.531 44.804 119.772 55.145 81.713 17.159 178.492 8.34 244.698-22.3 24.114-11.16 43.133-24.126 59.54-40.589 22.065-22.141 30.676-41.736 29.698-67.577-.695-18.354-5.946-32.438-18.313-49.122-25.781-34.777-74.745-60.92-140.925-75.243-36.064-7.805-79.542-10.882-113-7.998M147.235 69.98c-2.346 1.065-4.514 2.584-4.818 3.377-.655 1.706 4.159 11.643 5.64 11.643 1.565 0 8.533-3.733 10.339-5.539 2.196-2.196 2.012-5.673-.469-8.826-2.455-3.122-4.925-3.273-10.692-.655m385.49 18.27c-4.686 6.188-11.019 14.219-14.073 17.849l-5.552 6.599 2.909 2.151c1.601 1.183 3.124 2.151 3.387 2.151.262 0 2.37-2.7 4.685-6 2.315-3.3 4.586-6 5.048-6 .462 0 2.263 1.272 4.004 2.827l3.164 2.827-2.651 7.884-2.65 7.883 2.752 2.254c1.514 1.239 3.07 2.269 3.46 2.289.592.03 1.932-3.976 5.385-16.091.283-.992 2.018-1.875 4.45-2.264 2.866-.458 5.099-1.784 7.944-4.715 6.378-6.573 6.687-14.997.753-20.557C551.729 83.58 542.97 77 541.979 77c-.404 0-4.568 5.063-9.254 11.25M290 89.2c0 12.717-1.941 32.245-4.022 40.469-3.931 15.532-11.922 26.644-22.761 31.652-4.018 1.856-6.497 2.179-16.738 2.179-11.555 0-12.279-.127-18.659-3.268-9.432-4.643-17.078-13.09-19.786-21.858-3.842-12.438-2.121-22.253 6.607-37.694 3.054-5.401 5.33-10.042 5.06-10.313-1.947-1.946-35.533 9.441-57.888 19.627-51.23 23.341-80.222 58.612-77.473 94.253 1.942 25.196 20.11 50.628 51.106 71.542 9.82 6.626 32.436 18.662 33.349 17.749.259-.259-1.155-4.257-3.144-8.885-4.7-10.941-6.656-18.647-6.629-26.113.04-10.891 4.49-17.13 14.297-20.042 7.088-2.105 13.103-1.836 20.957.936 8.372 2.954 14.828 6.957 25.414 15.757 4.505 3.745 8.629 6.809 9.165 6.809.536 0 2.555-2.137 4.485-4.75 8.708-11.781 17.251-17.438 27.299-18.078 11.41-.727 21.302 6.095 31.651 21.828 4.628 7.036 20.71 38.81 20.71 40.918 0 .53.383 1.2.85 1.489.468.289 3.164-4.984 5.992-11.719 14.329-34.12 30.745-52.759 46.594-52.901 8.524-.077 13.816 2.947 24.182 13.817l9.118 9.562 7.882-6.388c11.054-8.958 16.624-12.61 23.484-15.398 17.796-7.231 34.858-1.526 37.798 12.638 1.651 7.955-1.454 22.043-7.539 34.199-2.833 5.66-2.845 5.783-.558 5.783 5.158 0 28.286-13.761 43.467-25.862 41.325-32.942 50.871-72.014 26.418-108.138-7.787-11.503-27.082-28.562-43.386-38.358-12.434-7.47-42.748-20.599-59.802-25.899-10.62-3.301-18.476-5.101-19.182-4.395-.315.316 1.546 3.974 4.136 8.13 9.004 14.447 11.46 26.926 7.703 39.149-5.363 17.452-20.297 27.087-40.607 26.198-11.069-.484-17.957-3.396-25.049-10.589-10.749-10.903-13.379-19.167-14.557-45.736-1.251-28.212-1.038-27.861-8.786-14.465L324.815 104h-20.79l-2.527-4.003c-1.389-2.201-3.679-6.437-5.089-9.414-1.409-2.976-3.427-6.195-4.485-7.152C290.042 81.728 290 81.853 290 89.2M72.863 86.295c-1.451.663-5.873 4.224-9.827 7.913l-7.188 6.708 7.598 7.792c4.179 4.286 10.85 11.708 14.826 16.495 3.975 4.787 7.678 8.709 8.228 8.717.55.007 2.039-.852 3.308-1.911 2.62-2.184 2.157-3.843-2.216-7.933-1.426-1.334-2.575-2.909-2.554-3.5.021-.592 2.047-2.65 4.504-4.575 7.112-5.571 8.836-10.758 5.909-17.783-4.106-9.858-14.779-15.491-22.588-11.923m465.374 6.13c-2.33 2.983-4.237 5.862-4.237 6.396 0 .535 1.591 2.368 3.535 4.075 5.403 4.744 10.947 3.941 14.036-2.033.875-1.693 1.334-4.105 1.019-5.359-.624-2.488-6.912-8.504-8.888-8.504-.676 0-3.135 2.441-5.465 5.425M73.5 93.861c-1.65 1.019-3.857 2.816-4.904 3.994-2.425 2.729-1.772 4.135 5.577 12.012l5.673 6.081 4.008-3.224c2.203-1.773 4.569-4.526 5.257-6.118 1.075-2.487.979-3.396-.68-6.469-2.026-3.75-7.6-8.14-10.329-8.133-.881.002-2.952.837-4.602 1.857m492.349 19.389c-5.244 3.987-13.382 9.886-18.084 13.107l-8.549 5.857 1.642 2.895c.903 1.592 2.184 2.69 2.847 2.441.663-.249 6.288-4.217 12.5-8.818 14.85-10.998 14.147-10.701 11.924-5.048-1.042 2.649-4.238 11.036-7.102 18.638-5.107 13.554-5.172 13.863-3.378 16 1.006 1.198 1.937 2.356 2.069 2.573.212.35 8.509-5.565 16.105-11.479 1.472-1.146 6.84-4.922 11.927-8.392 5.087-3.469 9.235-6.581 9.217-6.916-.055-.994-3.723-5.108-4.556-5.108-.422 0-6.116 4.096-12.653 9.103-6.537 5.007-12.094 8.894-12.349 8.639-.255-.255 2.473-8.24 6.064-17.745 3.59-9.505 6.527-17.663 6.527-18.128 0-1.01-3.194-4.869-4.031-4.869-.322 0-4.876 3.263-10.12 7.25m-526.05 6.5c-4.014 5.362-7.299 10.046-7.299 10.408 0 .363 3.15 2.801 7 5.419 7.072 4.81 13.322 9.532 23.662 17.876l5.662 4.569 5.216-7.261c2.869-3.994 6.512-8.636 8.096-10.317l2.879-3.055-2.912-2.79-2.913-2.791-5.125 7.596C71.246 143.582 68.36 147 67.651 147c-1.857 0-9.651-6.198-9.651-7.675 0-.686 2.025-3.733 4.5-6.772s4.5-5.903 4.5-6.365c0-.461-1.068-1.843-2.373-3.069l-2.373-2.229-4.642 6.505c-2.553 3.578-5.112 6.796-5.686 7.151-1.198.74-8.517-4.038-9.297-6.07-.286-.745 1.931-4.344 4.926-7.998S53 113.658 53 113.443c0-.215-1.328-1.078-2.951-1.917L47.099 110l-7.3 9.75m-13.384 28.638c-1.696.757-4.03 2.578-5.185 4.047-1.904 2.42-7.23 16.53-7.23 19.153 0 .594 4.163 2.313 9.25 3.82 5.087 1.506 14.65 4.897 21.25 7.535l12 4.796 1.205-2.619c2.004-4.358 1.564-4.918-5.705-7.259-7.272-2.342-7.701-2.886-5.937-7.526 1.493-3.926 2.458-4.302 11.089-4.32l7.652-.015 1.098-3.149c.604-1.732 1.098-3.496 1.098-3.92 0-.424-4.194-.52-9.321-.215l-9.321.556-2.113-3.582c-3.639-6.166-13.904-9.947-19.83-7.302m1.309 7.862C25.99 157.557 23 163.932 23 166.323c0 1.592 14.007 7.115 15.059 5.937.373-.418 1.47-2.888 2.438-5.49 1.652-4.441 1.657-4.887.079-7.295-2.713-4.139-9.409-5.82-12.852-3.225m534.31 8.867c.531 1.853.966 3.485.966 3.626 0 .142 1.913.264 4.25.272 2.337.009 4.793.361 5.456.782 1.268.806 4.299 11.175 4.286 14.663-.005 1.329-1.403 2.837-4.01 4.326-4.092 2.337-4.266 2.971-2.443 8.929.223.728 8.611-4.083 20.921-12l20.55-13.215-.594-3.5c-.327-1.925-.667-3.568-.755-3.651-.329-.309-25.582-2.292-37.377-2.935l-12.217-.667.967 3.37m19.972 6.633c.009 2.969 2.038 9.25 2.987 9.25.495 0 4.318-2.19 8.496-4.867l7.595-4.866-3.167-.634c-1.742-.348-6.036-.633-9.542-.633-5.407 0-6.374.266-6.369 1.75M176.472 325.325c-.225.646-1.361 5-2.525 9.675-1.164 4.675-2.979 11.36-4.032 14.855-1.053 3.496-1.915 8.293-1.915 10.661 0 3.572.52 4.744 3.047 6.87 5.871 4.94 20.082 7.313 24.647 4.116 1.177-.824 2.815-3.412 3.641-5.75 2.993-8.476 9.918-31.832 9.546-32.198-.209-.207-1.956-.668-3.881-1.024l-3.5-.649-3.922 14.809c-4.52 17.066-4.961 18.146-7.848 19.214-3.139 1.161-9.87-.644-12.647-3.392l-2.418-2.392 2.32-8.81c1.276-4.846 3.376-11.926 4.667-15.735 1.292-3.809 2.348-7.446 2.348-8.082 0-1.685-6.997-3.699-7.528-2.168m250.786 5.335c-9.216 3.15-10.143 3.687-9.25 5.355 1.605 3 1.206 3.135-2.968 1.005-10.855-5.538-23.625 1.247-26.009 13.818-2.53 13.337 5.474 27.665 16.621 29.756 5.021.942 12.086-1.398 15.982-5.295 3.84-3.839 4.264-6.557 1.344-8.602-1.851-1.297-2.35-1.089-5.883 2.443-3.187 3.188-4.553 3.86-7.842 3.86-7.421 0-13.187-7.576-13.231-17.382-.03-6.677 2.866-11.241 8.011-12.627 3.673-.989 6.399-.369 12.103 2.752.35.191 1.169-1.135 1.82-2.948l1.183-3.295 2.267 6c1.246 3.3 3.791 11.324 5.654 17.83l3.388 11.83 2.995-.599c4.372-.874 4.764-1.722 3.048-6.586-.851-2.412-1.355-4.887-1.12-5.499.235-.612 3.003-1.689 6.151-2.393 3.931-.88 6.86-2.323 9.351-4.608 3.492-3.202 3.627-3.58 3.62-10.151-.008-8.506-2.572-13.215-8.846-16.253-5.48-2.653-6.154-2.594-18.389 1.589m-216.528 5.09a39.463 39.463 0 0 1-1.192 3.419c-.579 1.4.207 1.78 4.886 2.365 4.216.527 5.574 1.095 5.567 2.331-.008 1.486-2.413 12.471-6.32 28.864l-1.484 6.229 3.6.994c1.98.546 3.723.871 3.873.722.15-.15 1.909-8.126 3.909-17.723 2-9.598 3.938-17.775 4.305-18.172.367-.397 2.755-.093 5.306.675 2.55.767 4.903 1.129 5.229.804 1.082-1.082.628 5.085-1.546 21.014-1.184 8.674-1.975 15.945-1.758 16.157.217.212 1.97.54 3.895.728l3.5.343.818-8.5c.45-4.675 1.127-8.817 1.505-9.206.379-.388 4.588-.128 9.354.576l8.666 1.282.643-3.428c.354-1.886.473-3.598.265-3.806-.207-.208-4.336-.682-9.175-1.054l-8.798-.676.443-5.343c.244-2.938.739-5.639 1.101-6 .362-.362 4.825.023 9.918.855 5.093.832 9.331 1.465 9.417 1.407.087-.059.312-1.663.5-3.565l.343-3.459-12.5-1.248c-6.875-.687-14.3-1.711-16.5-2.276-2.2-.564-6.798-1.501-10.218-2.081-3.42-.58-8.37-1.707-11-2.505-6.005-1.822-5.948-1.825-6.552.277m220.77.024c-2.2.869-4.195 1.733-4.433 1.919-.238.187.864 4.398 2.45 9.359l2.882 9.019 3.051-.657c6.584-1.42 10.363-3.549 11.601-6.538 2.547-6.147-2.81-15.006-8.936-14.779-1.438.054-4.415.808-6.615 1.677m-161.887 19.122c-.352 5.832-1.144 15.457-1.76 21.387-.616 5.931-.947 10.93-.736 11.109.211.179 2.049.582 4.085.896l3.702.571.298-5.68.298-5.679h9.179c8.775 0 9.312-.128 12.226-2.915 3.91-3.739 5.436-8.458 4.885-15.105-.866-10.444-6.1-13.961-21.913-14.724l-9.624-.464-.64 10.604m35.196-8.146c-.17.413-.171 10.313-.003 22l.306 21.25H313v-7.421c0-7.419 0-7.42 2.978-8.074 4.899-1.076 6.347.104 9.522 7.761l3 7.234 4.382.314c3.301.236 4.254-.01 3.867-1-.282-.723-1.983-4.59-3.778-8.593l-3.265-7.279 2.022-2.221c4.577-5.027 5.663-12.131 2.723-17.815-2.841-5.494-6.633-6.898-18.642-6.902-5.88-.002-10.83.333-11 .746m-27.201 5.075c-.28.454-.818 4.903-1.194 9.886l-.684 9.061 6.038.701c6.974.809 9.496-.149 11.722-4.453 3.066-5.93.882-12.997-4.609-14.912-3.726-1.299-10.539-1.47-11.273-.283m35.142.745c-.413.42-.75 4.063-.75 8.097V368l6.25-.015c7.089-.018 8.236-.503 9.587-4.056 1.26-3.315.426-7.381-1.958-9.538-2.004-1.814-11.801-3.172-13.129-1.821m57.072 10.942c-.282.281-3.826.844-7.877 1.25-7.313.733-7.371.761-8.033 4.005-.366 1.797-.344 3.466.05 3.709.394.244 4.613-.089 9.377-.738 6.576-.897 8.664-1.549 8.675-2.71.007-.84.285-2.54.616-3.778.423-1.576.169-2.25-.847-2.25-.797 0-1.68.23-1.961.512"
    />
    <path
      fill="#1d1d1c"
      fillRule="evenodd"
      d="M278.5 1.523c-48.115 4.958-84.774 12.34-115.689 23.298C73.386 56.517 15.098 111.324 2.338 175.708.203 186.48-.033 211.079 1.895 222c3.117 17.666 11.937 39.138 22.592 55 7.413 11.035 11.07 15.503 22.001 26.88 47.93 49.887 128.017 83.826 218.858 92.747 23.397 2.298 72.998 2.319 95.325.041 129.121-13.175 230.498-74.208 258.427-155.586 3.301-9.618 5.902-22.264 5.902-28.692 0-2.415.45-4.39 1-4.39.603 0 .972-3.87.93-9.75-.046-6.378-.368-9.058-.93-7.75-.671 1.562-.875 1.098-.93-2.119-.21-12.31-6.333-33.927-14.131-49.889-16.364-33.495-47.236-63.715-88.835-86.959C475.929 25.731 416.773 7.964 358.682 2.45 335.063.208 295.68-.247 278.5 1.523m17.95 32.4L296.399 57h10.754c12.511 0 15.269-.947 17.927-6.157 2.617-5.129 2.468-10.756-.394-14.974-2.272-3.348-2.281-3.466-.506-6.39 2.848-4.688 2.392-10.807-1.096-14.713l-2.915-3.266-11.835-.327-11.834-.327-.05 23.077m45.981-15.272C337.029 30.4 327 54.594 327 55.876c0 .62 1.586 1.124 3.536 1.124 3.237 0 3.697-.379 5.464-4.5 1.865-4.352 2.07-4.498 6.214-4.442 2.358.031 6.066.373 8.24.759 3.68.653 4.031 1.013 5.042 5.167.925 3.797 1.57 4.603 4.313 5.39 1.774.509 3.497.653 3.83.32.333-.333-1.961-11.2-5.097-24.149C353.67 15.424 352.573 12 351.002 12c-1.011 0-2.541-.27-3.4-.599-1.186-.455-2.431 1.291-5.171 7.25m-87.681-3.935c-1.512.229-2.75.548-2.75.707 0 .16-2.025 10.471-4.5 22.913-2.475 12.441-4.5 23.235-4.5 23.985 0 1.016.95 1.21 3.725.759 3.49-.568 3.771-.883 4.478-5.021.414-2.429 1.111-4.773 1.547-5.209 1.346-1.346 14.538-2.856 15.799-1.809.628.521 1.913 2.657 2.855 4.746 1.574 3.49 1.991 3.765 5.154 3.396 1.893-.221 3.442-.859 3.442-1.417 0-1.834-20.85-43.77-21.685-43.616-.448.082-2.053.337-3.565.566m116.251 1.782c-.551 1.448-1.001 3-1.001 3.45 0 1.013 3.584 2.02 7.25 2.038 2.183.011 2.749.478 2.743 2.264-.006 2.155-2.552 17.301-5.125 30.492-.67 3.433-1.027 6.427-.793 6.654.234.227 1.991.569 3.905.759l3.48.345 1.179-8.5c1.701-12.261 4.562-27.707 5.375-29.023.519-.84 1.773-.842 4.866-.009 5.003 1.347 6.12.814 6.12-2.92 0-2.999-1.457-4.048-5.624-4.048-2.303 0-15.742-2.479-19.625-3.62-1.223-.36-2.05.277-2.75 2.118M304 22.955v5.954l3.543.665c2.188.41 4.961.127 7.25-.74 3.114-1.18 3.758-1.934 4.027-4.713.502-5.177-1.948-7.121-8.975-7.121H304v5.955m-91-1.198c-2.344 1.258-4.434 3.672-6.329 7.311-2.55 4.898-2.784 6.169-2.38 12.932.538 8.996 3.029 15.144 8.151 20.117 7.505 7.286 16.717 7.184 23.808-.263 4.403-4.624 4.571-5.734 1.328-8.781l-2.422-2.275-1.534 2.966c-.844 1.632-3.14 3.729-5.104 4.66-7.882 3.741-15.769-3.301-17.196-15.355-.769-6.492 1.1-11.746 5.031-14.143 4.019-2.45 6.327-2.419 10.531.144 3.643 2.221 4.519 1.872 5.471-2.18.953-4.057-2.202-6.23-9.662-6.656-4.658-.267-7.06.111-9.693 1.523m196.5 2.133c-5.226 2.412-7.781 5.304-11.143 12.613-5.864 12.748-2.669 27.182 6.989 31.567 5.622 2.553 10.315 2.386 15.449-.55l4.295-2.455-2.154 3.025c-2.449 3.439-2.524 3.246 1.831 4.715 3.151 1.064 3.352.966 5.709-2.767 1.344-2.129 2.799-4.08 3.233-4.338.435-.257 4.166.718 8.291 2.166l7.5 2.634v4.97c0 4.298.338 5.142 2.5 6.236 5.092 2.576 5 3.005 5-23.231V33.95l-2.651-1.008c-1.459-.554-2.984-.88-3.389-.725-.405.156-5.304 6.133-10.885 13.283a8579.334 8579.334 0 0 1-12.512 16l-2.364 3-1.075-2.75c-1.222-3.126-1.656-3.232-5.124-1.25-2.955 1.689-8.349 1.919-11.055.47-5.325-2.849-6.557-13.965-2.511-22.655 2.502-5.376 6.315-8.318 10.766-8.311 3.15.005 8.479 3.409 9.278 5.927.89 2.804 2.942 2.603 4.967-.487 1.574-2.403 1.566-2.741-.148-5.676-2.166-3.707-9.365-7.777-13.704-7.746-1.701.012-4.893.853-7.093 1.868m-64.39 5.367c-1.725 3.716-3.243 7.766-3.373 9-.218 2.063.226 2.267 5.545 2.544 5.594.291 5.763.226 5.203-2-.318-1.266-1.402-5.451-2.409-9.301l-1.831-7-3.135 6.757m-152.86-2.561c-2.849.561-2.827 1.897.2 12.347 1.347 4.651 3.581 13.803 4.964 20.338 1.383 6.534 2.71 12.076 2.948 12.314.239.239 2.068.127 4.066-.247 2.735-.514 3.511-1.085 3.141-2.315-2.297-7.637-5.314-19.696-7.538-30.132-2.753-12.914-2.968-13.254-7.781-12.305m62.897 6.247c-1.823 11.038-1.817 11.059 3.103 11.042 7.466-.027 7.724-.809 3.275-9.933-2.159-4.429-4.219-8.052-4.579-8.052-.359 0-1.169 3.124-1.799 6.943m-92.889 3.686-3.241 1.37 2.608 6.75c1.434 3.713 4.753 13.186 7.375 21.051 2.622 7.865 4.97 14.504 5.219 14.752.248.248 4.238-.849 8.866-2.439 4.628-1.59 9.872-3.201 11.654-3.579 4.17-.886 4.657-1.804 3.24-6.099-.804-2.436-1.522-3.247-2.322-2.624-2.142 1.67-15.591 6.348-16.549 5.756-.521-.323-3.515-8.345-6.653-17.827-3.138-9.482-5.986-17.519-6.33-17.86-.344-.341-2.084-.004-3.867.749m141.198.625c-.313.816-.432 3.906-.263 6.865l.307 5.381 6.593.292c7.402.328 8.667-.463 9.527-5.953.844-5.389-1.231-7.156-8.986-7.65-5.199-.331-6.73-.104-7.178 1.065m169.029 11.777c-3.483 6.916-3.551 7.286-4.16 22.755-.669 16.984-.561 17.413 4.681 18.635 2.116.493 4.294-1.049 14.361-10.17 10.733-9.723 12.143-11.406 14.75-17.6 1.586-3.767 2.883-7.2 2.883-7.629 0-.936-5.869-3.486-6.522-2.833-.252.251-1.733 3.568-3.291 7.37-2.466 6.017-3.926 7.887-11.26 14.423l-8.427 7.51-.288-9.926c-.285-9.804-.239-10.029 3.773-18.39 2.233-4.655 3.938-8.563 3.788-8.684-1.022-.827-4.827-2.492-5.695-2.492-.579 0-2.646 3.164-4.593 7.031m-27.9 1.227c-3.072 4.081-5.585 7.711-5.585 8.068 0 .882 6.827 3.674 8.983 3.674 1.489 0 1.817-1.335 2.276-9.25.296-5.087.396-9.399.224-9.582-.172-.182-2.826 3.008-5.898 7.09m-310.034-2.244c-4.922 2.191-9.357 4.392-9.855 4.89-.542.542 1.302 5.067 4.585 11.251 3.02 5.69 7.391 14.733 9.714 20.095 2.323 5.362 4.592 9.75 5.043 9.75.452 0 5.088-1.981 10.304-4.401 11.342-5.265 13.126-7.374 12.423-14.69-.554-5.772-3.029-9.74-7.425-11.905-2.791-1.374-3.001-1.831-2.578-5.585.573-5.086-1.706-9.822-5.729-11.902-4.334-2.241-6.613-1.896-16.482 2.497m2.949 5.156c-2.2 1.144-4.143 2.205-4.317 2.356-.927.804 5.07 10.474 6.496 10.474 2.701 0 10.312-4.951 10.439-6.792.21-3.025-.264-4.67-1.863-6.458-2.054-2.297-5.817-2.15-10.755.42m-22.75 4.437c-1.513.801-2.75 1.843-2.75 2.316 0 .472 3.825 7.521 8.5 15.665 4.675 8.143 8.5 15.517 8.5 16.386 0 2.703-2.681 5.578-7.029 7.539-6.403 2.887-7.966 1.483-17.263-15.513-4.362-7.975-8.092-14.673-8.288-14.885-.61-.659-6.42 2.078-6.42 3.025 0 .903 10.963 19.906 17.027 29.513 4.928 7.81 8.271 8.823 16.473 4.992 10.25-4.786 14.454-10.224 12.495-16.161-.991-3.003-16.467-32.161-17.865-33.659-.347-.371-1.867-.019-3.38.782m389.852 11.074c-3.017 5.95-7.945 14.866-10.952 19.813-3.007 4.946-5.249 9.346-4.983 9.777.266.43 3.938 2.552 8.159 4.714 4.221 2.163 9.094 4.868 10.829 6.012l3.155 2.079 2.204-3.096c1.212-1.702 2.043-3.185 1.845-3.294-.197-.11-3.847-1.88-8.109-3.934-4.699-2.265-7.75-4.342-7.75-5.277 0-.848 1.147-3.804 2.548-6.569l2.548-5.028 7.678 4.141 7.677 4.142 1.775-2.191c.976-1.206 1.774-2.586 1.774-3.068 0-.482-3.117-2.446-6.926-4.365-3.809-1.918-7.206-3.942-7.55-4.498C507.648 76.621 512.882 68 514.62 68c.786 0 4.404 1.879 8.04 4.175 6.301 3.98 6.675 4.088 7.975 2.309 2.608-3.567 1.5-4.89-8.776-10.484-5.557-3.025-10.48-5.644-10.939-5.819-.459-.175-3.302 4.55-6.318 10.5M287.5 64.137c-55.734 4.804-99.553 15.56-136 33.381-43.003 21.027-69.339 46.444-79.764 76.982-3.902 11.432-4.914 28.796-2.323 39.853 4.911 20.957 17.312 40.418 36.617 57.468 29.168 25.76 70.531 44.804 119.772 55.145 81.713 17.159 178.492 8.34 244.698-22.3 24.114-11.16 43.133-24.126 59.54-40.589 22.065-22.141 30.676-41.736 29.698-67.577-.695-18.354-5.946-32.438-18.313-49.122-25.781-34.777-74.745-60.92-140.925-75.243-36.064-7.805-79.542-10.882-113-7.998M147.235 69.98c-2.346 1.065-4.514 2.584-4.818 3.377-.655 1.706 4.159 11.643 5.64 11.643 1.565 0 8.533-3.733 10.339-5.539 2.196-2.196 2.012-5.673-.469-8.826-2.455-3.122-4.925-3.273-10.692-.655m385.49 18.27c-4.686 6.188-11.019 14.219-14.073 17.849l-5.552 6.599 2.909 2.151c1.601 1.183 3.124 2.151 3.387 2.151.262 0 2.37-2.7 4.685-6 2.315-3.3 4.586-6 5.048-6 .462 0 2.263 1.272 4.004 2.827l3.164 2.827-2.651 7.884-2.65 7.883 2.752 2.254c1.514 1.239 3.07 2.269 3.46 2.289.592.03 1.932-3.976 5.385-16.091.283-.992 2.018-1.875 4.45-2.264 2.866-.458 5.099-1.784 7.944-4.715 6.378-6.573 6.687-14.997.753-20.557C551.729 83.58 542.97 77 541.979 77c-.404 0-4.568 5.063-9.254 11.25M290 89.2c0 12.717-1.941 32.245-4.022 40.469-3.931 15.532-11.922 26.644-22.761 31.652-4.018 1.856-6.497 2.179-16.738 2.179-11.555 0-12.279-.127-18.659-3.268-9.432-4.643-17.078-13.09-19.786-21.858-3.842-12.438-2.121-22.253 6.607-37.694 3.054-5.401 5.33-10.042 5.06-10.313-1.947-1.946-35.533 9.441-57.888 19.627-51.23 23.341-80.222 58.612-77.473 94.253 1.942 25.196 20.11 50.628 51.106 71.542 9.82 6.626 32.436 18.662 33.349 17.749.259-.259-1.155-4.257-3.144-8.885-4.7-10.941-6.656-18.647-6.629-26.113.04-10.891 4.49-17.13 14.297-20.042 7.088-2.105 13.103-1.836 20.957.936 8.372 2.954 14.828 6.957 25.414 15.757 4.505 3.745 8.629 6.809 9.165 6.809.536 0 2.555-2.137 4.485-4.75 8.708-11.781 17.251-17.438 27.299-18.078 11.41-.727 21.302 6.095 31.651 21.828 4.628 7.036 20.71 38.81 20.71 40.918 0 .53.383 1.2.85 1.489.468.289 3.164-4.984 5.992-11.719 14.329-34.12 30.745-52.759 46.594-52.901 8.524-.077 13.816 2.947 24.182 13.817l9.118 9.562 7.882-6.388c11.054-8.958 16.624-12.61 23.484-15.398 17.796-7.231 34.858-1.526 37.798 12.638 1.651 7.955-1.454 22.043-7.539 34.199-2.833 5.66-2.845 5.783-.558 5.783 5.158 0 28.286-13.761 43.467-25.862 41.325-32.942 50.871-72.014 26.418-108.138-7.787-11.503-27.082-28.562-43.386-38.358-12.434-7.47-42.748-20.599-59.802-25.899-10.62-3.301-18.476-5.101-19.182-4.395-.315.316 1.546 3.974 4.136 8.13 9.004 14.447 11.46 26.926 7.703 39.149-5.363 17.452-20.297 27.087-40.607 26.198-11.069-.484-17.957-3.396-25.049-10.589-10.749-10.903-13.379-19.167-14.557-45.736-1.251-28.212-1.038-27.861-8.786-14.465L324.815 104h-20.79l-2.527-4.003c-1.389-2.201-3.679-6.437-5.089-9.414-1.409-2.976-3.427-6.195-4.485-7.152C290.042 81.728 290 81.853 290 89.2M72.863 86.295c-1.451.663-5.873 4.224-9.827 7.913l-7.188 6.708 7.598 7.792c4.179 4.286 10.85 11.708 14.826 16.495 3.975 4.787 7.678 8.709 8.228 8.717.55.007 2.039-.852 3.308-1.911 2.62-2.184 2.157-3.843-2.216-7.933-1.426-1.334-2.575-2.909-2.554-3.5.021-.592 2.047-2.65 4.504-4.575 7.112-5.571 8.836-10.758 5.909-17.783-4.106-9.858-14.779-15.491-22.588-11.923m465.374 6.13c-2.33 2.983-4.237 5.862-4.237 6.396 0 .535 1.591 2.368 3.535 4.075 5.403 4.744 10.947 3.941 14.036-2.033.875-1.693 1.334-4.105 1.019-5.359-.624-2.488-6.912-8.504-8.888-8.504-.676 0-3.135 2.441-5.465 5.425M73.5 93.861c-1.65 1.019-3.857 2.816-4.904 3.994-2.425 2.729-1.772 4.135 5.577 12.012l5.673 6.081 4.008-3.224c2.203-1.773 4.569-4.526 5.257-6.118 1.075-2.487.979-3.396-.68-6.469-2.026-3.75-7.6-8.14-10.329-8.133-.881.002-2.952.837-4.602 1.857m492.349 19.389c-5.244 3.987-13.382 9.886-18.084 13.107l-8.549 5.857 1.642 2.895c.903 1.592 2.184 2.69 2.847 2.441.663-.249 6.288-4.217 12.5-8.818 14.85-10.998 14.147-10.701 11.924-5.048-1.042 2.649-4.238 11.036-7.102 18.638-5.107 13.554-5.172 13.863-3.378 16 1.006 1.198 1.937 2.356 2.069 2.573.212.35 8.509-5.565 16.105-11.479 1.472-1.146 6.84-4.922 11.927-8.392 5.087-3.469 9.235-6.581 9.217-6.916-.055-.994-3.723-5.108-4.556-5.108-.422 0-6.116 4.096-12.653 9.103-6.537 5.007-12.094 8.894-12.349 8.639-.255-.255 2.473-8.24 6.064-17.745 3.59-9.505 6.527-17.663 6.527-18.128 0-1.01-3.194-4.869-4.031-4.869-.322 0-4.876 3.263-10.12 7.25m-526.05 6.5c-4.014 5.362-7.299 10.046-7.299 10.408 0 .363 3.15 2.801 7 5.419 7.072 4.81 13.322 9.532 23.662 17.876l5.662 4.569 5.216-7.261c2.869-3.994 6.512-8.636 8.096-10.317l2.879-3.055-2.912-2.79-2.913-2.791-5.125 7.596C71.246 143.582 68.36 147 67.651 147c-1.857 0-9.651-6.198-9.651-7.675 0-.686 2.025-3.733 4.5-6.772s4.5-5.903 4.5-6.365c0-.461-1.068-1.843-2.373-3.069l-2.373-2.229-4.642 6.505c-2.553 3.578-5.112 6.796-5.686 7.151-1.198.74-8.517-4.038-9.297-6.07-.286-.745 1.931-4.344 4.926-7.998S53 113.658 53 113.443c0-.215-1.328-1.078-2.951-1.917L47.099 110l-7.3 9.75m-13.384 28.638c-1.696.757-4.03 2.578-5.185 4.047-1.904 2.42-7.23 16.53-7.23 19.153 0 .594 4.163 2.313 9.25 3.82 5.087 1.506 14.65 4.897 21.25 7.535l12 4.796 1.205-2.619c2.004-4.358 1.564-4.918-5.705-7.259-7.272-2.342-7.701-2.886-5.937-7.526 1.493-3.926 2.458-4.302 11.089-4.32l7.652-.015 1.098-3.149c.604-1.732 1.098-3.496 1.098-3.92 0-.424-4.194-.52-9.321-.215l-9.321.556-2.113-3.582c-3.639-6.166-13.904-9.947-19.83-7.302m1.309 7.862C25.99 157.557 23 163.932 23 166.323c0 1.592 14.007 7.115 15.059 5.937.373-.418 1.47-2.888 2.438-5.49 1.652-4.441 1.657-4.887.079-7.295-2.713-4.139-9.409-5.82-12.852-3.225m534.31 8.867c.531 1.853.966 3.485.966 3.626 0 .142 1.913.264 4.25.272 2.337.009 4.793.361 5.456.782 1.268.806 4.299 11.175 4.286 14.663-.005 1.329-1.403 2.837-4.01 4.326-4.092 2.337-4.266 2.971-2.443 8.929.223.728 8.611-4.083 20.921-12l20.55-13.215-.594-3.5c-.327-1.925-.667-3.568-.755-3.651-.329-.309-25.582-2.292-37.377-2.935l-12.217-.667.967 3.37m19.972 6.633c.009 2.969 2.038 9.25 2.987 9.25.495 0 4.318-2.19 8.496-4.867l7.595-4.866-3.167-.634c-1.742-.348-6.036-.633-9.542-.633-5.407 0-6.374.266-6.369 1.75M.365 199.5c.003 5.5.171 7.622.373 4.716.203-2.905.201-7.405-.004-10-.206-2.594-.371-.216-.369 5.284m176.107 125.825c-.225.646-1.361 5-2.525 9.675-1.164 4.675-2.979 11.36-4.032 14.855-1.053 3.496-1.915 8.293-1.915 10.661 0 3.572.52 4.744 3.047 6.87 5.871 4.94 20.082 7.313 24.647 4.116 1.177-.824 2.815-3.412 3.641-5.75 2.993-8.476 9.918-31.832 9.546-32.198-.209-.207-1.956-.668-3.881-1.024l-3.5-.649-3.922 14.809c-4.52 17.066-4.961 18.146-7.848 19.214-3.139 1.161-9.87-.644-12.647-3.392l-2.418-2.392 2.32-8.81c1.276-4.846 3.376-11.926 4.667-15.735 1.292-3.809 2.348-7.446 2.348-8.082 0-1.685-6.997-3.699-7.528-2.168m250.786 5.335c-9.216 3.15-10.143 3.687-9.25 5.355 1.605 3 1.206 3.135-2.968 1.005-10.855-5.538-23.625 1.247-26.009 13.818-2.53 13.337 5.474 27.665 16.621 29.756 5.021.942 12.086-1.398 15.982-5.295 3.84-3.839 4.264-6.557 1.344-8.602-1.851-1.297-2.35-1.089-5.883 2.443-3.187 3.188-4.553 3.86-7.842 3.86-7.421 0-13.187-7.576-13.231-17.382-.03-6.677 2.866-11.241 8.011-12.627 3.673-.989 6.399-.369 12.103 2.752.35.191 1.169-1.135 1.82-2.948l1.183-3.295 2.267 6c1.246 3.3 3.791 11.324 5.654 17.83l3.388 11.83 2.995-.599c4.372-.874 4.764-1.722 3.048-6.586-.851-2.412-1.355-4.887-1.12-5.499.235-.612 3.003-1.689 6.151-2.393 3.931-.88 6.86-2.323 9.351-4.608 3.492-3.202 3.627-3.58 3.62-10.151-.008-8.506-2.572-13.215-8.846-16.253-5.48-2.653-6.154-2.594-18.389 1.589m-216.528 5.09a39.463 39.463 0 0 1-1.192 3.419c-.579 1.4.207 1.78 4.886 2.365 4.216.527 5.574 1.095 5.567 2.331-.008 1.486-2.413 12.471-6.32 28.864l-1.484 6.229 3.6.994c1.98.546 3.723.871 3.873.722.15-.15 1.909-8.126 3.909-17.723 2-9.598 3.938-17.775 4.305-18.172.367-.397 2.755-.093 5.306.675 2.55.767 4.903 1.129 5.229.804 1.082-1.082.628 5.085-1.546 21.014-1.184 8.674-1.975 15.945-1.758 16.157.217.212 1.97.54 3.895.728l3.5.343.818-8.5c.45-4.675 1.127-8.817 1.505-9.206.379-.388 4.588-.128 9.354.576l8.666 1.282.643-3.428c.354-1.886.473-3.598.265-3.806-.207-.208-4.336-.682-9.175-1.054l-8.798-.676.443-5.343c.244-2.938.739-5.639 1.101-6 .362-.362 4.825.023 9.918.855 5.093.832 9.331 1.465 9.417 1.407.087-.059.312-1.663.5-3.565l.343-3.459-12.5-1.248c-6.875-.687-14.3-1.711-16.5-2.276-2.2-.564-6.798-1.501-10.218-2.081-3.42-.58-8.37-1.707-11-2.505-6.005-1.822-5.948-1.825-6.552.277m220.77.024c-2.2.869-4.195 1.733-4.433 1.919-.238.187.864 4.398 2.45 9.359l2.882 9.019 3.051-.657c6.584-1.42 10.363-3.549 11.601-6.538 2.547-6.147-2.81-15.006-8.936-14.779-1.438.054-4.415.808-6.615 1.677m-161.887 19.122c-.352 5.832-1.144 15.457-1.76 21.387-.616 5.931-.947 10.93-.736 11.109.211.179 2.049.582 4.085.896l3.702.571.298-5.68.298-5.679h9.179c8.775 0 9.312-.128 12.226-2.915 3.91-3.739 5.436-8.458 4.885-15.105-.866-10.444-6.1-13.961-21.913-14.724l-9.624-.464-.64 10.604m35.196-8.146c-.17.413-.171 10.313-.003 22l.306 21.25H313v-7.421c0-7.419 0-7.42 2.978-8.074 4.899-1.076 6.347.104 9.522 7.761l3 7.234 4.382.314c3.301.236 4.254-.01 3.867-1-.282-.723-1.983-4.59-3.778-8.593l-3.265-7.279 2.022-2.221c4.577-5.027 5.663-12.131 2.723-17.815-2.841-5.494-6.633-6.898-18.642-6.902-5.88-.002-10.83.333-11 .746m-27.201 5.075c-.28.454-.818 4.903-1.194 9.886l-.684 9.061 6.038.701c6.974.809 9.496-.149 11.722-4.453 3.066-5.93.882-12.997-4.609-14.912-3.726-1.299-10.539-1.47-11.273-.283m35.142.745c-.413.42-.75 4.063-.75 8.097V368l6.25-.015c7.089-.018 8.236-.503 9.587-4.056 1.26-3.315.426-7.381-1.958-9.538-2.004-1.814-11.801-3.172-13.129-1.821m57.072 10.942c-.282.281-3.826.844-7.877 1.25-7.313.733-7.371.761-8.033 4.005-.366 1.797-.344 3.466.05 3.709.394.244 4.613-.089 9.377-.738 6.576-.897 8.664-1.549 8.675-2.71.007-.84.285-2.54.616-3.778.423-1.576.169-2.25-.847-2.25-.797 0-1.68.23-1.961.512"
    />
  </svg>
)
export default BatLogo;

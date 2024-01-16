<!doctype html>
<body class="preload">


<main class="main loconative-scroll-container loconative-scroll-container--main">
  @php do_action('get_header') @endphp

  @include('sections.header')

  <div class="text-8xl">
  {!! the_content() !!}
  </div>

  @php wp_footer() @endphp
</main>
</body>

</html>

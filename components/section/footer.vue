<template>
  <div class="section-footer p-16 bg-gray-200">
    <div class="container mx-auto">
      <img src="/logo.png" alt="logo" class="w-48 mb-4">
      <div class="grid grid-cols-3">
        <div>
          <div class="mb-4">
            <div class="font-semibold text-lg mb-4">
              Kontak
            </div>
            <div class="text-justify">
              Alamat: Perumahan Estusae Alam Indah @Cikopo Purwakarta
            </div>
            <div>Tel: 0811-1580-188</div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.756943490657!2d107.49548551477018!3d-6.425266195351272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e696d1b21015515%3A0xe32961aaf541bd49!2sPerumahan%20Estusae%20Alam%20Indah%20Cikopo%20Purwakarta!5e0!3m2!1sen!2sid!4v1627722914539!5m2!1sen!2sid"
            width="400"
            height="200"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          />
        </div>

        <div />

        <div class="medsoc-wrapper">
          <div class="font-semibold text-lg mb-4">
            Ikuti Kami:
          </div>
          <a href="https://www.facebook.com/Nandangksestusae" target="_blank">
            <div class="flex items-center mb-4">
              <FacebookIcon :width="40" :height="40" />
              <div class="ml-4 font-semibold">@Nandangksestusae</div>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCzo09l2IhnYRjK44yQqgjjA" target="_blank">
            <div class="flex items-center mb-4">
              <YoutubeIcon :width="40" :height="40" />
              <div class="ml-4 font-semibold">KujaGo.id</div>
            </div>
          </a>
          <a href="https://www.instagram.com/kujago_property/" target="_blank">
            <div class="flex items-center mb-4">
              <InstagramIcon :width="40" :height="40" />
              <div class="ml-4 font-semibold">@kujago_property</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import YoutubeIcon from '~/assets/icons/youtube.svg?inline'
import InstagramIcon from '~/assets/icons/instagram.svg?inline'

export default {
  components: {
    FacebookIcon, YoutubeIcon, InstagramIcon
  }
}
</script>

<template>
  <div class="container mx-auto py-16">
    <div class="grid grid-cols-2">
      <div class="col-span-1">
        <div class="text-red-main font-bold text-xl mb-4">
          About Us
        </div>
        <div class="text-orange-main font-bold text-2xl">
          ESTUSAE ALAM INDAH
        </div>
        <hr class="border-2 w-16 bg-divider-color my-4">
        <div class="text-justify">
          Masterpiece property yang dikembangkan oleh PT Bangun Estusae Propertindo.

          Berada di epicentrum kawasan strategis Cikopo Purwakarta diatas lahan 24 Hektar terdiri dari 7 tipe rumah cluster serta bangunan komersil lainnya yang dilengkapi dengan berbagai fasilitas premium untuk menunjang kebutuhan penghuni dan warga di sekitarnya.

          Mendukung mobilitas tinggi para penghuninya karena memiliki akses yang strategis dan terintegrasi (TOD – Transit Oriented Development).

          Hal ini sangat cocok bagi generasi milenial yang memiliki gaya hidup dinamis demi menghasilkan kualitas hidup yang lebih baik.
        </div>
        <div class="p-4">
          <vs-tabs
            v-model="activeTabs"
            color="#F18C06"
            class="mt-4 relative p-4 bg-gray-100 rounded-sm"
          >
            <vs-tab label="Visi" class="vs-tabs">
              <div class="tab-content py-4 text-justify">
                Menjadi pengembang properti yang menguntungkan, berkualitas, terpercaya dan berkomitmen menyediakan kebutuhan perumahan yang terjangkau harganya.
              </div>
            </vs-tab>
            <vs-tab label="Misi" class="vs-tabs">
              <div class="tab-content p-4">
                <ol class="list-decimal">
                  <li class="text-justify">
                    Menciptakan produk perumahan dan tempat usaha untuk kelas menengah ke bawah dilanjutkan pada kelas menengah ke atas pada tahapan berikutnya.
                  </li>
                  <li class="text-justify">
                    Menjadi pengembang yang menyediakan produk-produk dengan kualitas yang optimal dan menjaga biaya produksi yang efisien.
                  </li>
                  <li class="text-justify">
                    Menciptakan manajemen perusahaan yang handal, terampil dan akuntabel untuk menciptakan iklim profesionalitas seiring dengan kemajuan perusahaan.
                  </li>
                  <li class="text-justify">
                    Menaati business plan dan profit target yang sudah disetujui dan disepakati oleh Dewan Komisaris dan Dewan Direksi.
                  </li>
                </ol>
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </div>
      <div class="col-span-1 p-16">
        <img src="/about-us-logo.png" alt="about-us" class="w-5/6 mx-auto">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeTabs: 0
    }
  }
}
</script>

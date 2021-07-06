<script lang="typescript">
    import {Game} from "../../Phaser/Game/Game";
    import {EmailSceneName} from "../../Phaser/Login/EmailScene";
    import {DISPLAY_TERMS_OF_USE, MAX_USERNAME_LENGTH} from "../../Enum/EnvironmentVariable";
    import logoImg from "../images/logo.png";
    import {gameManager} from "../../Phaser/Game/GameManager";

    export let game: Game;

    const emailScene = game.scene.getScene(EmailSceneName);

    let email = gameManager.getPlayerEmail() || '';
    let startValidating = false;

    let conscent = false;

    function submit() {
        startValidating = true;

        let finalEmail = email.trim();
        if (!conscent) {
          finalEmail = '';
        }
        emailScene.setEmail(finalEmail);
    }

</script>

<form class="emailScene" on:submit|preventDefault={submit}>
    <section class="text-center">
        <img src={logoImg} alt="WorkAdventure logo" />
    </section>
    <section class="text-center">
        <h2>Enter your email</h2>
    </section>
    <input type="email" name="emailSceneName" class="nes-input is-dark" autofocus bind:value={email} on:keypress={() => {startValidating = true}} class:is-error={email.trim() === '' && startValidating} />
    <section class="error-section">
    {#if email.trim() === '' && startValidating }
        <p class="err">The email is empty</p>
    {/if}
    </section>

    <section class="conscent">
        <label for="conscent">
          <input id="conscent" type="checkbox" class="nes-checkbox is-dark" bind:checked={conscent} />
          <span>Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé.<br/>
          Les données collectées <strong>ne seront diffusés à aucun tiers</strong>.<br/>
          Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données.
          Consultez le site cnil.fr pour plus d’informations sur vos droits.<br/>
          Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez nous contacter à l'adresse <strong>contact@be-ys.cloud</strong>.
          <br/><br/>
          Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
          </span>
        </label>
    </section>

    {#if DISPLAY_TERMS_OF_USE}
    <section class="terms-and-conditions">
        <p>By continuing, you are agreeing our <a href="https://workadventu.re/terms-of-use" target="_blank">terms of use</a>, <a href="https://workadventu.re/privacy-policy" target="_blank">privacy policy</a> and <a href="https://workadventu.re/cookie-policy" target="_blank">cookie policy</a>.</p>
    </section>
    {/if}
    <section class="action">
        <button type="submit" class="nes-btn is-primary emailSceneFormSubmit" enabled=" " >{conscent ? 'Continue' : 'Cancel'}</button>
    </section>
</form>

<style lang="scss">
  .emailScene {
    pointer-events: auto;
    margin: 20px auto 0;
    width: 90%;
    color: #ebeeee;

    display: flex;
    flex-flow: column wrap;
    align-items: center;

    input {
      text-align: center;
      font-family: "Press Start 2P";
      max-width: 400px;
    }

    .terms-and-conditions {
      max-width: 400px;
    }

    p.err {
      color: #ce372b;
      text-align: center;
    }

    section {
      margin: 10px;

      &.error-section {
        min-height: 2rem;
        margin: 0;

        p {
          margin: 0;
        }
      }

      &.action {
        text-align: center;
        margin-top: 20px;
      }

      h2 {
        font-family: "Press Start 2P";
        margin: 1px;
      }

      &.text-center {
        text-align: center;
      }

      a {
        text-decoration: underline;
        color: #ebeeee;
      }

      a:hover {
        font-weight: 700;
      }

      p {
        text-align: left;
        margin: 10px 10px;
      }

      img {
        width: 100%;
        margin: 20px 0;
      }
    }
  }

</style>

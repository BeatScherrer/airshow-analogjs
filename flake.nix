{
  description = "Airshow website flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-darwin"
      ];
      # Helper to apply system to a single output
      forAllSystems =
        function: nixpkgs.lib.genAttrs systems (system: function nixpkgs.legacyPackages.${system});
    in
    {

      # TODO: apply forAllSystems to devShells
      # forAllSystems (pkgs: {
      #     devShells
      #   });

      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Analog deps
            nodejs_20
            pnpm
            nodePackages."@angular/cli"

            # tools
            just
            git
            eza
            fd
            ffmpeg

            # LSPs
            vscode-langservers-extracted
            typescript-language-server
            tailwindcss-language-server
            nodePackages.prettier
            nodePackages.vscode-langservers-extracted
            emmet-ls
          ];
        };
      });

      shellHook = ''
        alias ls=eza
        alias find=fd

        pnpm install
      '';

    };
}
